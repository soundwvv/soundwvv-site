import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
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
        setShowConfirmation(true);
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
        <div className="absolute inset-0 bg-black/50"></div>
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
            {/* Confirmation Banner */}
            <div 
              className={`mb-6 transition-all duration-500 ease-out overflow-hidden ${
                showConfirmation 
                  ? 'opacity-100 max-h-40' 
                  : 'opacity-0 max-h-0'
              }`}
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Message received.</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Thanks for reaching out. We'll review your inquiry and follow up shortly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-lg p-8">
  <iframe
    src="https://tally.so/embed/J92xJz?alignLeft=1&hideTitle=1&transparentBackground=1"
    loading="lazy"
    width="100%"
    height="700"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    title="SOUNDWVV Home Contact Form"
    style={{ background: "transparent" }}
  ></iframe>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

