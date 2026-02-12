import React, { useState } from 'react';
import { formFields } from '../mock';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
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
    
    setTimeout(() => {
      toast({
        title: "Consultation Request Received!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData(formFields);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background vinyl texture with overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="mb-8">
              <span className="text-white/60 text-sm uppercase tracking-widest mb-4 block">Let's Connect</span>
              <h2 className="section-heading text-white mb-6">
                Start Your Sound Consultation
              </h2>
              <p className="body-large text-mid-grey leading-relaxed">
                Tell us about your space, brand, event, or project. We'll take it from there.
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
