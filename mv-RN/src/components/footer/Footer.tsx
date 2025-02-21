import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-semibold">MVO Patio & Reno</h3>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/768px-2023_Facebook_icon.svg.png" alt="Facebook" className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="Instagram" className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-300 mt-6">
                &copy; {new Date().getFullYear()} MVO Patio & Reno. All rights reserved.
            </div>
        </footer>
    )
}
