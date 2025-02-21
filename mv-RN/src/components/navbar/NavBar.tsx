import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logoVIII.png';
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink
import { motion, AnimatePresence } from "framer-motion"; // For animations

export const NavBar = () => {
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
        <div>
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex flex-col items-center text-center space-y-2">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 p-3 mt-3">
                        <ScrollLink to="about" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">
                            About Us
                        </ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">
                            Services
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">
                            Portfolio
                        </ScrollLink>
                        <ScrollLink to="testimonials" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">
                            Testimonials
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-yellow-500 cursor-pointer">
                            Contact
                        </ScrollLink>

                        {/* Language Menu Button for Desktop */}
                        <div className="relative language-btn left-24">
                            {/* Language Button */}
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
                                aria-expanded={isDropdownOpen} // Accessibility
                                aria-haspopup="true" // Accessibility
                            >
                                <span>{language}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transform transition-transform duration-300"
                                    style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} // Rotate arrow on open
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }} // Initial animation state
                                        animate={{ opacity: 1, y: 0 }} // Animate in
                                        exit={{ opacity: 0, y: -10 }} // Animate out
                                        transition={{ duration: 0.2 }} // Animation duration
                                        className="absolute right-0 mt-2 w-40 bg-blue-200 text-black rounded-md shadow-lg language-menu"
                                    >
                                        <button
                                            onClick={() => changeLanguage("⚜️ FR")}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            ⚜️ FR
                                        </button>
                                        <button
                                            onClick={() => changeLanguage("🇨🇦 EN")}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            🇨🇦 EN
                                        </button>
                                        <button
                                            onClick={() => changeLanguage("🇨🇱 ES")}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            🇨🇱 ES
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                <ScrollLink to="home" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    Home
                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    About Us
                </ScrollLink>
                <ScrollLink to="services" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    Services
                </ScrollLink>
                <ScrollLink to="portfolio" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    Portfolio
                </ScrollLink>
                <ScrollLink to="testimonials" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    Testimonials
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="block py-2 hover:text-yellow-500">
                    Contact
                </ScrollLink>

                {/* Language Options within the Hamburger Menu */}
                <div className="mt-4">
                    <button onClick={() => changeLanguage('⚜️ FR')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">⚜️ FR</button>
                    <button onClick={() => changeLanguage('🇨🇦 EN')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇦 EN</button>
                    <button onClick={() => changeLanguage('🇨🇱 ES')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">🇨🇱 ES</button>
                </div>
            </div>
        </div>
    );
};
