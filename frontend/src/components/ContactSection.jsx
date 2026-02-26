import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    spaceType: '',
    city: '',
    timeline: '',
    message: '',
    website: '' // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Include city and timeline in the message
      const payload = {
        ...formData,
        message: `${formData.message}${formData.city ? `\n\nLocation: ${formData.city}` : ''}${formData.timeline ? `\nTimeline: ${formData.timeline.replace(/-/g, ' ').replace(/(\d) (\d)/g, '$1-$2')}` : ''}`
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
        toast({
          title: "Message Sent!",
          description: data.message || "We'll be in touch soon.",
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          spaceType: '',
          city: '',
          timeline: '',
          message: '',
          website: ''
        });
      } else if (response.status === 429) {
        toast({
          title: "Too Many Requests",
          description: "Please wait before submitting again.",
          variant: "destructive"
        });
      } else {
        throw new Error(data.detail || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background vinyl texture - more visible with blur and reduced saturation */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_beat-space/artifacts/zoxrdq84_VinylUpsideDown.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px) saturate(0.7)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-white text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                Let's Connect
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Have a question or quick inquiry?
                <br />
                Share a few details. We'll take it from there.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-purple/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-mid-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:contact@soundwvv.com" className="text-mid-grey hover:text-white transition-colors">
                    contact@soundwvv.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-pink/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-mid-pink" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href="tel:+12347777777" className="text-mid-grey hover:text-white transition-colors">
                    +1 (234) 777-7777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-mid-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-mid-grey">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-black/50 border border-white/10 rounded-lg p-8 space-y-6">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-white/20 text-white placeholder:text-white/40 focus:border-mid-purple focus:bg-[#1a1a1a]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-white/20 text-white placeholder:text-white/40 focus:border-mid-purple focus:bg-[#1a1a1a]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                  Company/Brand
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border-white/20 text-white placeholder:text-white/40 focus:border-mid-purple focus:bg-[#1a1a1a]"
                  placeholder="Your Brand"
                />
              </div>

              <div>
                <label htmlFor="spaceType" className="block text-white text-sm font-medium mb-2">
                  Space Type
                </label>
                <select
                  id="spaceType"
                  name="spaceType"
                  value={formData.spaceType || ''}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/20 text-white rounded-md px-3 py-2 focus:border-mid-purple focus:outline-none focus:ring-1 focus:ring-mid-purple"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  <option value="" style={{ backgroundColor: '#1a1a1a' }}>Select</option>
                  <option value="restaurant" style={{ backgroundColor: '#1a1a1a' }}>Restaurant</option>
                  <option value="hotel" style={{ backgroundColor: '#1a1a1a' }}>Hotel</option>
                  <option value="retail" style={{ backgroundColor: '#1a1a1a' }}>Retail</option>
                  <option value="event" style={{ backgroundColor: '#1a1a1a' }}>Event</option>
                  <option value="other" style={{ backgroundColor: '#1a1a1a' }}>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-white text-sm font-medium mb-2">
                    City / Location
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-white/20 text-white placeholder:text-white/40 focus:border-mid-purple focus:bg-[#1a1a1a]"
                    placeholder="Los Angeles, CA"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline || ''}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/20 text-white rounded-md px-3 py-2 focus:border-mid-purple focus:outline-none focus:ring-1 focus:ring-mid-purple"
                    style={{ backgroundColor: '#1a1a1a' }}
                  >
                    <option value="" style={{ backgroundColor: '#1a1a1a' }}>Select</option>
                    <option value="immediate" style={{ backgroundColor: '#1a1a1a' }}>Immediate</option>
                    <option value="1-3-months" style={{ backgroundColor: '#1a1a1a' }}>1–3 Months</option>
                    <option value="3-6-months" style={{ backgroundColor: '#1a1a1a' }}>3–6 Months</option>
                    <option value="planning" style={{ backgroundColor: '#1a1a1a' }}>Planning Stage</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Tell Us About Your Project *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#1a1a1a] border-white/20 text-white placeholder:text-white/40 focus:border-mid-purple focus:bg-[#1a1a1a] resize-none"
                  placeholder="Describe your space, brand, or event..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button large w-full group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
