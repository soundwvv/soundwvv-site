import React from 'react';
import { Instagram, Facebook, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">SOUNDWVV</h3>
            <p className="text-mid-grey body-small mb-6">
              Music direction for brands and spaces.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-grey/20 flex items-center justify-center text-mid-grey hover:bg-mid-pink hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-grey/20 flex items-center justify-center text-mid-grey hover:bg-mid-blue hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://soundcloud.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-grey/20 flex items-center justify-center text-mid-grey hover:bg-mid-orange hover:text-white transition-all"
                aria-label="SoundCloud"
              >
                <Music size={18} />
              </a>
            </div>
          </div>

          {/* Middle: Company */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-mid-grey hover:text-white transition-colors body-small">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-mid-grey hover:text-white transition-colors body-small">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-mid-grey hover:text-white transition-colors body-small">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Get In Touch */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Get In Touch</h4>
            <ul className="space-y-3 text-mid-grey body-small">
              <li>
                <a href="mailto:contact@soundwvv.com" className="hover:text-white transition-colors">
                  contact@soundwvv.com
                </a>
              </li>
              <li>
                <a href="tel:+12347777777" className="hover:text-white transition-colors">
                  +1 (234) 777-7777
                </a>
              </li>
              <li className="pt-2">
                Los Angeles, CA<br />
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mid-grey text-sm">
              © {currentYear} SOUNDWVV. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-mid-grey hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-mid-grey hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
