import { NavLink, Link } from "react-router-dom";
import {
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
    FaFacebook, FaInstagram, FaLinkedin, FaTwitter,
    FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { to: "/", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
    ];



    return (
        <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-black text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    <div className="space-y-6">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-3 group">
                                <div className="w-12 h-12 bg-linear-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                    <span className="text-gray-900 font-bold text-xl">MAA</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                                    MAA Advertising
                                </h2>
                            </NavLink>
                            <p className="text-sm leading-relaxed text-gray-400 mt-4">
                                Your trusted partner for impactful outdoor advertising solutions. We specialize in hoardings, flex printing, LED displays, and comprehensive fabrication services that make your brand stand out.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                <FaFacebook className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                <FaLinkedin className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                                <FaTwitter className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative pb-3">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-white to-gray-400"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 py-1"
                                    >
                                        <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative pb-3">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-white to-gray-400"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                    <FaPhoneAlt className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Phone</p>
                                    <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-white transition-colors">+91 XXXXXXXXXX</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <a href="mailto:maaadvertising@email.com" className="text-gray-400 hover:text-white transition-colors">maaadvertising@email.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Location</p>
                                    <span className="text-gray-400">Chandigarh, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} <Link to="/admin">MAA Advertising.</Link> All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Designed & Developed by</span>
                            <a
                                href="https://github.com/IPrincemishra"
                                target="_blank"
                                className="text-red-500 font-medium hover:text-red-400 transition-colors duration-300"
                            >
                                Prince Mishra
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
