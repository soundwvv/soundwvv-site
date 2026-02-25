from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from collections import defaultdict
import time


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_EMAIL = 'contact@soundwvv.com'

# Rate limiting storage (in-memory for simplicity)
rate_limit_store = defaultdict(list)
RATE_LIMIT_WINDOW = 3600  # 1 hour in seconds
RATE_LIMIT_MAX_REQUESTS = 5  # Max 5 submissions per hour per IP

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact form model
class ContactFormSubmission(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(default="", max_length=100)
    spaceType: Optional[str] = Field(default="", max_length=50)
    message: str = Field(..., min_length=10, max_length=5000)
    # Honeypot field - should always be empty
    website: Optional[str] = Field(default="")

class ContactFormResponse(BaseModel):
    success: bool
    message: str
    submission_id: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Rate limiting helper
def check_rate_limit(ip_address: str) -> bool:
    """Check if IP is within rate limit. Returns True if allowed, False if rate limited."""
    current_time = time.time()
    # Clean old entries
    rate_limit_store[ip_address] = [
        timestamp for timestamp in rate_limit_store[ip_address]
        if current_time - timestamp < RATE_LIMIT_WINDOW
    ]
    # Check if under limit
    if len(rate_limit_store[ip_address]) >= RATE_LIMIT_MAX_REQUESTS:
        return False
    # Add current request
    rate_limit_store[ip_address].append(current_time)
    return True

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(submission: ContactFormSubmission, request: Request):
    """
    Handle contact form submissions from both homepage and contact page.
    Sends email to contact@soundwvv.com with form details.
    """
    # Get client IP for rate limiting
    client_ip = request.client.host if request.client else "unknown"
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        client_ip = forwarded_for.split(",")[0].strip()
    
    # Check honeypot field (spam protection)
    if submission.website:
        logger.warning(f"Honeypot triggered from IP: {client_ip}")
        # Return success to not reveal spam detection
        return ContactFormResponse(
            success=True,
            message="Thank you for your message. We'll be in touch soon."
        )
    
    # Check rate limit
    if not check_rate_limit(client_ip):
        logger.warning(f"Rate limit exceeded for IP: {client_ip}")
        raise HTTPException(
            status_code=429,
            detail="Too many submissions. Please try again later."
        )
    
    # Generate submission ID
    submission_id = str(uuid.uuid4())[:8]
    timestamp = datetime.now(timezone.utc)
    
    # Format space type for display
    space_type_display = submission.spaceType.replace("_", " ").title() if submission.spaceType else "Not specified"
    
    # Create email HTML content
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #000; padding: 20px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; letter-spacing: 2px;">SOUNDWVV</h1>
        </div>
        <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; margin-top: 0;">New Contact Form Submission</h2>
            <p style="color: #666; font-size: 14px;">Submission ID: {submission_id} | {timestamp.strftime('%B %d, %Y at %I:%M %p UTC')}</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">Full Name</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">{submission.name}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                        <a href="mailto:{submission.email}" style="color: #0066cc;">{submission.email}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Company/Brand</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">{submission.company or 'Not provided'}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Space Type</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">{space_type_display}</td>
                </tr>
            </table>
            
            <div style="margin-top: 25px; padding: 20px; background-color: #fff; border-left: 4px solid #000;">
                <h3 style="margin-top: 0; color: #333;">Project Description</h3>
                <p style="white-space: pre-wrap; margin-bottom: 0;">{submission.message}</p>
            </div>
            
            <p style="margin-top: 30px; font-size: 13px; color: #666;">
                Reply directly to this email to respond to {submission.name}.
            </p>
        </div>
        <div style="background-color: #000; padding: 15px; text-align: center;">
            <p style="color: #666; font-size: 12px; margin: 0;">
                This message was sent from the SOUNDWVV website contact form.
            </p>
        </div>
    </body>
    </html>
    """
    
    # Plain text version
    text_content = f"""
SOUNDWVV - New Contact Form Submission
======================================

Submission ID: {submission_id}
Date: {timestamp.strftime('%B %d, %Y at %I:%M %p UTC')}

CONTACT DETAILS
---------------
Full Name: {submission.name}
Email: {submission.email}
Company/Brand: {submission.company or 'Not provided'}
Space Type: {space_type_display}

PROJECT DESCRIPTION
-------------------
{submission.message}

---
Reply directly to this email to respond to {submission.name}.
"""
    
    # Store submission in MongoDB
    submission_doc = {
        "id": submission_id,
        "name": submission.name,
        "email": submission.email,
        "company": submission.company,
        "space_type": submission.spaceType,
        "message": submission.message,
        "ip_address": client_ip,
        "timestamp": timestamp.isoformat(),
        "email_sent": False
    }
    
    try:
        await db.contact_submissions.insert_one(submission_doc)
    except Exception as e:
        logger.error(f"Failed to store submission in database: {str(e)}")
        # Continue even if DB storage fails - email is more important
    
    # Send email via Resend
    if resend.api_key:
        try:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_EMAIL],
                "reply_to": submission.email,
                "subject": f"New Inquiry from {submission.name} - {space_type_display}",
                "html": html_content,
                "text": text_content
            }
            
            # Run sync SDK in thread to keep FastAPI non-blocking
            email_result = await asyncio.to_thread(resend.Emails.send, params)
            
            # Update submission with email status
            await db.contact_submissions.update_one(
                {"id": submission_id},
                {"$set": {"email_sent": True, "email_id": email_result.get("id")}}
            )
            
            logger.info(f"Contact form email sent successfully. Submission ID: {submission_id}")
            
        except Exception as e:
            logger.error(f"Failed to send contact form email: {str(e)}")
            # Don't fail the request - submission is stored
            return ContactFormResponse(
                success=True,
                message="Thank you for your message. We'll be in touch soon.",
                submission_id=submission_id
            )
    else:
        logger.warning("RESEND_API_KEY not configured - email not sent")
    
    return ContactFormResponse(
        success=True,
        message="Thank you for your message. We'll be in touch soon.",
        submission_id=submission_id
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()