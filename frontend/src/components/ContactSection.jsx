import React, { useState } from 'react';
import { formFields } from '../mock';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState(formFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Received!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });
      setFormData(formFields);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-dark-grey/5">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="mb-8">
              <span className="caption text-mid-pink uppercase tracking-widest mb-4 block">Let's Connect</span>
              <h2 className="section-heading text-white mb-6">
                Book Your Sound Consultation
              </h2>
              <p className="body-large text-mid-grey leading-relaxed">
                Ready to elevate your brand with the perfect sonic identity? 
                Fill out the form and let's start crafting your unique audio experience.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-purple/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-mid-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:hello@soundwvv.com" className="text-mid-grey hover:text-white transition-colors">
                    hello@soundwvv.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-pink/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-mid-pink" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-mid-grey hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-mid-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-mid-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit Studio</h4>
                  <p className="text-mid-grey">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-grey/10 border border-mid-purple/20 rounded-lg p-6">
              <CheckCircle2 size={24} className="text-mid-purple mb-3" />
              <h4 className="text-white font-medium mb-2">What Happens Next?</h4>
              <ul className="space-y-2 text-mid-grey body-small">
                <li className="flex items-start gap-2">
                  <span className="text-mid-purple mt-1">•</span>
                  <span>We'll review your project details within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mid-pink mt-1">•</span>
                  <span>Schedule a discovery call to understand your vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mid-blue mt-1">•</span>
                  <span>Receive a custom proposal tailored to your needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-black/50 border border-white/10 rounded-lg p-8 space-y-6">
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
                    className="bg-dark-grey/20 border-white/20 text-white focus:border-mid-purple"
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
                    className="bg-dark-grey/20 border-white/20 text-white focus:border-mid-purple"
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
                  className="bg-dark-grey/20 border-white/20 text-white focus:border-mid-purple"
                  placeholder="Your Brand"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-white text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-dark-grey/20 border border-white/20 text-white rounded-md px-3 py-2 focus:border-mid-purple focus:outline-none focus:ring-1 focus:ring-mid-purple"
                  >
                    <option value="">Select service</option>
                    <option value="dj-sets">DJ Sets</option>
                    <option value="music-curation">Music Curation</option>
                    <option value="event-production">Event Production</option>
                    <option value="sound-consulting">Sound Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-white text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-dark-grey/20 border-white/20 text-white focus:border-mid-purple"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-dark-grey/20 border border-white/20 text-white rounded-md px-3 py-2 focus:border-mid-purple focus:outline-none focus:ring-1 focus:ring-mid-purple"
                >
                  <option value="">Select budget</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
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
                  className="bg-dark-grey/20 border-white/20 text-white focus:border-mid-purple resize-none"
                  placeholder="Describe your event, brand, or space. What kind of sonic experience are you envisioning?"
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
                    <span>Send Consultation Request</span>
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
