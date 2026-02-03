# SOUNDWVV - Product Requirements Document

## Original Problem Statement
Build a website for SOUNDWVV - a DJ-led music curation studio for brands, spaces, and events.

## User Choices & Requirements
- **Design Aesthetic**: Mix of vibrant accents on dark background (bold & minimal)
- **Key Sections**: 
  - Home/Hero with brand intro
  - About/Story section
  - Services (DJ sets, music curation, event planning)
  - Credibility section with client logos and stats
  - Contact/Booking form for sound consultation
- **Color Scheme**: Bold, vibrant, and dark
- **Integrations**: Contact/booking intake form for sound consultation
- **Content**: User has body text copy ready for about, services, etc.

## Architecture & Tech Stack
- **Frontend**: React 19, React Router v7, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI, MongoDB (to be implemented)
- **Design System**: Bigfish-inspired design with:
  - Dark backgrounds (#151515)
  - Vibrant accent colors (purple, pink, blue, yellow)
  - Rounded-full buttons and tags
  - Clean typography with Inter font family
  - Smooth animations and hover effects

## Implementation Status

### Phase 1: Frontend with Mock Data ✅ (December 3, 2025)
**Completed Components:**
- ✅ Navbar with smooth scroll navigation and mobile menu
- ✅ Hero Section with full-screen layout, animated background, and CTAs
- ✅ About Section with mission statement and visual elements
- ✅ Services Section with 4 service cards (DJ Sets, Music Curation, Event Production, Sound Consulting)
- ✅ Credibility Section with stats (500+ Events, 150+ Brands, 50+ Cities, 10K+ Hours) and client logos grid
- ✅ Contact Section with comprehensive booking/consultation form
- ✅ Footer with social links and company info
- ✅ Mock data structure in `/app/frontend/src/mock.js`
- ✅ Design system implementation following Bigfish guidelines
- ✅ Responsive design for mobile, tablet, and desktop

**Design Features Implemented:**
- Dark background (#151515) with vibrant service cards
- Rounded-full buttons with hover animations
- Service tags with distinct colors
- Smooth scroll behavior between sections
- Form with proper validation structure
- Stats section with colored numbers
- Client logo grid with hover effects

## Next Phase: Backend Development

### API Endpoints to Implement
1. **POST /api/consultation** - Submit consultation booking form
   - Fields: name, email, company, eventType, date, budget, message
   - Response: Confirmation with booking ID

2. **GET /api/services** - Fetch services data
3. **GET /api/stats** - Fetch credibility stats
4. **GET /api/clients** - Fetch client logos

### Database Schema (MongoDB)
```javascript
// Consultation Schema
{
  name: String,
  email: String,
  company: String,
  eventType: String,
  date: Date,
  budget: String,
  message: String,
  status: String (pending/contacted/completed),
  createdAt: Date
}
```

### Frontend-Backend Integration
- Remove mock.js data imports
- Connect ContactSection form to `/api/consultation`
- Add API calls for dynamic content loading
- Implement proper error handling and loading states
- Add toast notifications for form submission feedback

## Prioritized Backlog

### P0 (Critical - MVP)
- Backend API implementation
- Database setup and models
- Form submission functionality
- Email notification system for new consultations

### P1 (High Priority)
- Admin dashboard to view consultation requests
- Form validation improvements
- Analytics integration
- SEO optimization

### P2 (Nice to Have)
- Music player integration for showcasing mixes
- Portfolio section with past event photos/videos
- Testimonials section
- Blog/News section
- Real client logo uploads vs placeholder images

## User Personas
1. **Brand Manager**: Looking to enhance retail/office space ambiance with curated music
2. **Event Planner**: Needs professional DJ services for corporate events
3. **Marketing Director**: Seeking audio branding consultation for campaigns

## Success Metrics
- Consultation form conversion rate
- Average time on site
- Section engagement (scroll depth)
- Mobile vs desktop traffic split

## Content Requirements
- High-quality DJ/event photos
- Client logo assets (high-res)
- Service descriptions (user has copy ready)
- About section copy (user has ready)
- Team bios and photos (optional)

---
**Last Updated**: December 3, 2025
