import React from 'react';
import { FaExclamationTriangle, FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="bg-white rounded-3xl flex shadow-xl border border-gray-100 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-linear-to-r from-gray-900 to-black text-white p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        </div>
                        <FaExclamationTriangle className="text-6xl md:text-8xl mx-auto mb-6 relative z-10 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">404</h1>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 relative z-10">Page Not Found</h2>
                        <p className="text-gray-300 max-w-md mx-auto relative z-10">
                            Oops! The page you're looking for seems to have disappeared into the digital void.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 text-center">
                        <div className="mb-8">
                            <p className="text-gray-600 text-lg mb-6">
                                Don't worry, it happens to the best of us. Let's get you back on track!
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                                    <FaSearch className="text-gray-500" />
                                    What could have happened?
                                </h3>
                                <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        The page might have been moved or deleted
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        The URL could be misspelled
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        You might be trying to access a restricted area
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center justify-center gap-3 bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <FaArrowLeft />
                                Go Back
                            </button>

                            <button
                                onClick={() => navigate('/')}
                                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                            >
                                <FaHome />
                                Home Page
                            </button>
                        </div>


                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Need help? <a href="/contact" className="text-blue-600 hover:underline font-medium">Contact Support</a></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
