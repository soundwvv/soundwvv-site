# SOUNDWVV - Product Requirements Document

## Original Problem Statement
Build a website for "SOUNDWVV," a DJ-led studio focused on music direction and programming for brands and spaces. The site requires:
- Multi-section portfolio/service homepage (Hero, About, Services, Track Record, Brand Partners, Contact)
- Standalone editorial-style About page
- Standalone Services page
- Standalone Contact page
- Functional preloader/loading screen
- Contact form backend integration
- Design: minimal, premium, black/charcoal palette with subtle animations

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion, react-router-dom, lucide-react
- **Backend:** FastAPI with Resend email integration
- **Database:** MongoDB

## Architecture
```
/app
├── backend/
│   └── server.py (FastAPI with /api/contact endpoint)
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AboutPage.jsx ✅ FINALIZED
    │   │   ├── AboutSection.jsx ✅ Updated
    │   │   ├── BridgeSection.jsx
    │   │   ├── ContactPage.jsx ✅ API Integration
    │   │   ├── ContactSection.jsx ✅ API Integration
    │   │   ├── CredibilitySection.jsx ✅ 12 logos, scaled
    │   │   ├── Footer.jsx
    │   │   ├── HeroSectionNew.jsx ✅ Tally link
    │   │   ├── Home.jsx ✅ sessionStorage loading
    │   │   ├── LoadingScreen.jsx ✅ Error fallback
    │   │   ├── Navbar.jsx ✅ Tally link
    │   │   ├── OnDemandSoundSection.jsx ✅ Two-column
    │   │   ├── ServicesPage.jsx ✅ FINALIZED
    │   │   └── ServicesSectionNew.jsx
    │   ├── App.js ✅ ScrollToTop component
    │   └── index.css
    ├── package.json
    └── tailwind.config.js
```

## Completed Features

### Feb 25, 2026 - Backend Contact Form Integration
- **server.py:**
  - Created `/api/contact` POST endpoint
  - Resend email integration (sends to contact@soundwvv.com)
  - HTML and plain text email formatting
  - Reply-to set to submitter's email
  - Honeypot spam protection
  - Rate limiting (5 requests/hour per IP)
  - MongoDB storage of all submissions
  - Proper error handling
- **ContactSection.jsx & ContactPage.jsx:**
  - Both forms submit to `/api/contact`
  - Hidden honeypot field
  - Error handling with user feedback
  - Success/error toasts

### Feb 24, 2026 - Brand Partner Grid & Refinements
- Added 4 new logos: SoFi Stadium, Porsche, Adidas, Tequila Patrón
- Reordered to 3x4 grid with specific layout
- Individual logo scaling for visual balance
- Replaced NBPA and Porsche logos with new versions
- Services page title changed to "Partnerships"
- Increased top padding on About & Services (140px)
- CTA section vertical balance adjustments

### Feb 23-24, 2026 - Scroll & Routing Fixes
- ScrollToTop component using useLayoutEffect
- `behavior: 'instant'` to override CSS smooth scroll
- `scrollRestoration: 'manual'` for browser history
- Route changes render at scroll position 0 immediately

### Feb 20-21, 2026 - Homepage & Navigation Updates
- Navbar & Hero buttons link to Tally form
- Hero description: "A DJ-led music curation studio for brands and spaces."
- Contact Section: "Let's Connect" headline, "Space Type" dropdown
- On-Demand Sound: Two-column layout
- Contact form field styling fixes
- View Services & About buttons route correctly

### Previous Sessions
- Multi-section landing page
- Video preloader with fallback
- About, Services, Contact pages built
- Global routing and navigation

## API Endpoints

### POST /api/contact
**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "spaceType": "string (optional)",
  "message": "string (required, 10-5000 chars)",
  "website": "string (honeypot, must be empty)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll be in touch soon.",
  "submission_id": "string"
}
```

**Error Responses:**
- 422: Validation error
- 429: Rate limit exceeded

## Database Schema

### contact_submissions
```javascript
{
  id: "string (8-char UUID)",
  name: "string",
  email: "string",
  company: "string",
  space_type: "string",
  message: "string",
  ip_address: "string",
  timestamp: "ISO datetime",
  email_sent: "boolean",
  email_id: "string (optional)"
}
```

## Pending Issues
| Priority | Issue | Status |
|----------|-------|--------|
| P1 | Track Record section video background fill (gray bands) | Pending |
| P2 | Configure production Resend API key | Pending |

### Mar 13, 2026 - Mobile Loading Screen Video Swap
- Separate video assets for mobile vs desktop loading screen
- Desktop: original `soundwvv_preloader_final2.mp4` (unchanged)
- Mobile (<768px): new uploaded MP4 with pre-scaled/centered logo
- Full-screen `object-cover` on both, timing preserved (4s + 450ms fade)
- React `key` prop ensures correct video element on resize

## Environment Variables Required
```
# Backend (.env)
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
RESEND_API_KEY=re_xxxxx (required for email sending)
SENDER_EMAIL=onboarding@resend.dev
```

## User Preferences
- Extremely detailed, prescriptive feedback style
- Follow exact typography and spacing specifications
- Minimal, premium, editorial design aesthetic
