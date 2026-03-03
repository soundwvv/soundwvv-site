import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">SOUNDWVV</h3>
            <p className="text-mid-grey body-small">
              Music direction for brands and spaces.
            </p>
          </div>

          {/* Middle: Studio */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Studio</h4>
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
