import React, { useState, useEffect } from 'react';
import { Carousel } from './components/carousel/Carousel';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('🇨🇦 EN'); // Default language
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track language dropdown state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close language dropdown when the menu is opened
  };

  const changeLanguage = (lang: React.SetStateAction<string>) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Close dropdown when a language is selected
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (!e.target.closest('.language-menu') && !e.target.closest('.language-btn')) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className="bg-gray-50">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">MV Construction & Nettoyage</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8  p-3 mt-3">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#about" className="hover:text-yellow-500">About Us</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#portfolio" className="hover:text-yellow-500">Portfolio</a>
            <a href="#testimonials" className="hover:text-yellow-500">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>

            {/* Language Menu Button for Desktop */}
            <div className="relative language-btn left-24">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-md"
              >
                <span>{language}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-blue-200 text-black rounded-md shadow-lg language-menu">
                  <button onClick={() => changeLanguage('⚜️ FR')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">⚜️ FR</button>
                  <button onClick={() => changeLanguage('🇨🇦 EN')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇦 EN</button>
                  <button onClick={() => changeLanguage('🇨🇱 ES')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇱 ES</button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-600 text-white p-4`}>
        <a href="#home" className="block py-2 hover:text-yellow-500">Home</a>
        <a href="#about" className="block py-2 hover:text-yellow-500">About Us</a>
        <a href="#services" className="block py-2 hover:text-yellow-500">Services</a>
        <a href="#portfolio" className="block py-2 hover:text-yellow-500">Portfolio</a>
        <a href="#testimonials" className="block py-2 hover:text-yellow-500">Testimonials</a>
        <a href="#contact" className="block py-2 hover:text-yellow-500">Contact</a>

        {/* Language Options within the Hamburger Menu */}
        <div className="mt-4">
          <button onClick={() => changeLanguage('⚜️ FR')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">⚜️ FR</button>
          <button onClick={() => changeLanguage('🇨🇦 EN')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇦 EN</button>
          <button onClick={() => changeLanguage('🇨🇱 ES')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇱 ES</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32 text-center" id="home">
        <h1 className="text-4xl font-bold">Transform Your Space with Expert Renovation and Cleaning Services</h1>
        <p className="mt-4 text-lg">Providing top-notch renovation and cleaning services for homes and businesses.</p>
        <button className="mt-8 px-8 py-3 bg-yellow-500 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
          Get a Free Estimate
        </button>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-8 text-center" id="portfolio">
        <h2 className="text-3xl font-semibold">Our Recent Work</h2>
        <Carousel />
      </section>

      {/* About Us Section */}
      <section className="py-16 px-8 text-center" id="about">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
          We are a professional team dedicated to transforming spaces and providing high-quality cleaning services. With years of experience, we ensure your home or business gets the best service.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 text-center" id="services">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div style={{ margin: 10 }} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Renovation</h3>
            <p className="mt-4 text-gray-700">We specialize in kitchen, bathroom, and full home renovations that elevate your space.</p>
          </div>
          <div className="service-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Cleaning</h3>
            <p className="mt-4 text-gray-700">From deep cleaning to post-renovation cleanups, we make your space shine.</p>
            <img src="https://oceanicknettoyage.com/wp-content/uploads/2023/09/soins-adaptes-1.png" alt="Renovated Kitchen" className="mt-4 w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-8 text-center" id="portfolio">
        <h2 className="text-3xl font-semibold">Our Recent Work</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="portfolio-item">
            <h3 className="text-xl font-semibold text-blue-600">Kitchen Renovation</h3>
            <img src="https://kaizenaire.com/wp-content/uploads/2023/12/Commercial-Cleaning-Services-in-Singapore-Keeping-Your-Business-Sparkling-Clean-1024x585.jpg" alt="Renovated Kitchen" className="mt-4 w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="portfolio-item">
            <h3 className="text-xl font-semibold text-blue-600">Post-Renovation Cleanup</h3>
            <img src="https://oceanicknettoyage.com/wp-content/uploads/2023/09/soins-adaptes-1.png" alt="Post Renovation Cleanup" className="mt-4 w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold">MV Construction & Nettoyage</h3>
            <p className="mt-2 text-gray-200">
              Transforming your spaces with expert renovation and cleaning services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-500">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Facebook_Logo_2023.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 mt-6">
          &copy; {new Date().getFullYear()} MV Construction & Nettoyage. All rights reserved.
        </div>
      </footer>

    </div>

  );
};
