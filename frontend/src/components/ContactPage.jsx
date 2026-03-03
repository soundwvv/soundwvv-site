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
            <div className="bg-black/50 border border-white/10 rounded-lg p-8 max-w-xl mx-auto">
  <iframe
    src="https://tally.so/embed/LZdjry?alignLeft=1&hideTitle=1&transparentBackground=1"
    loading="lazy"
    width="100%"
    height="900"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    title="SOUNDWVV Contact Page Form"
    style={{ background: "transparent" }}
  ></iframe>
</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
