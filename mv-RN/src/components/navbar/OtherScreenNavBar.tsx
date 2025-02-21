import React from 'react'
import logo from "../../assets/logo/logoVIII.png"; // Import your logo
import { useNavigate } from 'react-router-dom';

export const OtherScreenNavBar = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="h-12" /> {/* Adjust height as needed */}
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)} // Go back to the previous page
                    className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <span className="hidden sm:inline">Back</span> {/* Hide text on small screens */}
                </button>
            </div>
        </div>
    )
}
