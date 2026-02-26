import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    spaceType: '',
    city: '',
    timeline: '',
    message: '',
    website: '' // Honeypot field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Map form fields to API expected format
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        spaceType: formData.spaceType,
        message: `${formData.message}${formData.city ? `\n\nLocation: ${formData.city}` : ''}${formData.timeline ? `\nTimeline: ${formData.timeline}` : ''}`,
        website: formData.website // Honeypot
      };
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else if (response.status === 429) {
        setError('Too many requests. Please wait before trying again.');
      } else {
        throw new Error(data.detail || 'Failed to send message');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '4px',
    color: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease, background-color 0.2s ease'
  };

  const labelStyles = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '8px',
    letterSpacing: '0.02em'
  };

  return (
    <div className="bg-black min-h-screen" data-testid="contact-page">
      <Navbar />
      
      <section style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: '600px' }}>
          <h1 className="text-white font-medium" style={{ fontSize: '36px', lineHeight: '1.15', letterSpacing: '-0.015em', marginBottom: '16px' }}>
            Contact
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '400' }}>
            Tell us about your space, brand, or event.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '520px' }}>
          {isSubmitted ? (
            <div className="text-center" style={{ padding: '60px 40px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Check size={24} style={{ color: 'white' }} />
              </div>
              <p className="text-white font-medium" style={{ fontSize: '20px', marginBottom: '8px' }}>Thank you.</p>
              <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.6)' }}>We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
                {/* Honeypot field - hidden from users, catches bots */}
                <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
                {error && (
                  <div style={{ marginBottom: '24px', padding: '12px 16px', backgroundColor: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.3)', borderRadius: '4px', color: '#ff6464', fontSize: '14px' }}>
                    {error}
                  </div>
                )}
                
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>Full Name <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={inputStyles} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="input-fullname" />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>Company / Brand Name <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>*</span></label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required style={inputStyles} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="input-company" />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>Email <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyles} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="input-email" />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>Space Type</label>
                  <select name="spaceType" value={formData.spaceType} onChange={handleChange} style={{ ...inputStyles, cursor: 'pointer', appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="select-spacetype">
                    <option value="" style={{ backgroundColor: '#1a1a1a' }}>Select...</option>
                    <option value="restaurant" style={{ backgroundColor: '#1a1a1a' }}>Restaurant</option>
                    <option value="hotel" style={{ backgroundColor: '#1a1a1a' }}>Hotel</option>
                    <option value="retail" style={{ backgroundColor: '#1a1a1a' }}>Retail</option>
                    <option value="event" style={{ backgroundColor: '#1a1a1a' }}>Event</option>
                    <option value="other" style={{ backgroundColor: '#1a1a1a' }}>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>City / Location</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyles} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="input-city" />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyles}>Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} style={{ ...inputStyles, cursor: 'pointer', appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="select-timeline">
                    <option value="" style={{ backgroundColor: '#1a1a1a' }}>Select...</option>
                    <option value="immediate" style={{ backgroundColor: '#1a1a1a' }}>Immediate</option>
                    <option value="1-3-months" style={{ backgroundColor: '#1a1a1a' }}>1–3 Months</option>
                    <option value="3-6-months" style={{ backgroundColor: '#1a1a1a' }}>3–6 Months</option>
                    <option value="planning" style={{ backgroundColor: '#1a1a1a' }}>Planning Stage</option>
                  </select>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyles}>What are you looking for?</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} style={{ ...inputStyles, resize: 'vertical', minHeight: '100px' }} className="focus:border-white/30 focus:bg-white/[0.06]" data-testid="textarea-message" />
                </div>
                <button type="submit" disabled={isSubmitting} data-testid="submit-btn" className="w-full group bg-white text-black py-3.5 rounded-full font-medium text-[13px] uppercase tracking-wider transition-all duration-[220ms] ease-out hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
