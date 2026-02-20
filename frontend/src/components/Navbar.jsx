import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If on home page, scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
    }
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold tracking-wider text-white hover:text-light-pink transition-colors duration-300">
              SOUNDWVV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleAboutClick} className="nav-link">
              About
            </button>
            <button onClick={handleServicesClick} className="nav-link">
              Services
            </button>
            <button onClick={handleContactClick} className="nav-link">
              Contact
            </button>
            <a 
              href="https://tally.so/r/rj6245" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              Start Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-light-pink transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col gap-4 p-6">
              <button onClick={handleAboutClick} className="nav-link text-left">
                About
              </button>
              <button onClick={handleServicesClick} className="nav-link text-left">
                Services
              </button>
              <button onClick={handleContactClick} className="nav-link text-left">
                Contact
              </button>
              <a 
                href="https://tally.so/r/rj6245" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button w-full text-center"
              >
                Start Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
