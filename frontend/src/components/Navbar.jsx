import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navItems = [
        { to: "/", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-4`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-105">
                        MAA
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        MAA <span className="text-slate-500 font-light italic">Ad.</span>
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `
                                text-sm font-medium transition-colors duration-200
                                ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}
                            `}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                </nav>

                {/* Humburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-slate-900 focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`
                absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 md:hidden
                ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
            `}>
                <nav className="flex flex-col p-6 gap-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-medium text-slate-600 border-b border-slate-50 pb-2"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;