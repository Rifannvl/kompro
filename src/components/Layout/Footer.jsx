import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                            COMPRO.
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm max-w-sm">
                            Crafting digital experiences with precision and elegance.
                            We build brands that stand the test of time.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Company</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Compro Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
