import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import {
    FaArrowRight, FaImage, FaArrowUp
} from "react-icons/fa";


const Home = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const STATS = [
        '10Y+ EXPERIENCE',
        '500+ PROJECTS',
        'NATIONWIDE REACH',
        'ISO CERTIFIED'
    ];


    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axiosInstance.get("/products");
                setServices(res.data?.products?.slice(0, 6) || []);
            } catch {
                setServices([]);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="bg-white text-slate-900 font-sans antialiased">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0a0a0a]">

                <div className="absolute inset-0 z-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
                        EST. 2020 • Premium Fabrication
                    </span>
                    <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        Architects of <br />
                        <span className="italic font-serif">Visual Impact.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        We transform urban landscapes through precision-engineered outdoor advertising and high-fidelity print solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => navigate("/services")}
                            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            View Services <FaArrowRight size={14} />
                        </button>
                        <button
                            onClick={() => navigate("/contact")}
                            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Get an Estimate
                        </button>
                    </div>
                </div>
            </section>

            {/* --- STATS / LOGO BAR --- */}
            <div className="py-12 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale">
                        {STATS.map((stat) => (
                            <span key={stat} className="text-xs font-black tracking-widest">{stat}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- SERVICES SECTION --- */}
            <section className="py-22 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-red-600 mb-4">Our Services</h2>
                            <h3 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                                Integrated solutions for <br /><strong>modern brands.</strong>
                            </h3>
                        </div>
                        <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                            From conceptual design to final structural installation, we handle the entire lifecycle of your outdoor presence.
                        </p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map(n => <div key={n} className="h-100 bg-gray-50 animate-pulse rounded-2xl" />)}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => {
                                return (
                                    <div
                                        key={service._id}
                                        onClick={() => navigate(`/services/${service._id}`)}
                                        className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-transparent hover:border-gray-200 transition-all duration-500 cursor-pointer"
                                    >
                                        <div className="aspect-4/5 overflow-hidden">
                                            {service.image ? (
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                    <FaImage className="text-4xl text-gray-300" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                                            <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2">{service.category}</p>
                                            <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                                            <div className="flex items-center gap-2 text-sm font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                View Details <FaArrowUp className="rotate-45" size={10} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* --- MINI ABOUT / PHILOSOPHY --- */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                                alt="Work Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                            <p className="text-4xl font-black text-black">99%</p>
                            <p className="text-xs font-bold text-gray-400 tracking-tighter">CLIENT SATISFACTION</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Uncompromising Quality in Every Square Inch.</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We believe that outdoor advertising is an art form. Every hoarding we fabricate and every flex we print undergoes rigorous quality control to ensure color accuracy and structural integrity against the elements.
                        </p>
                        <ul className="space-y-4">
                            {['Precision Metal Fabrication', 'UV-Resistant Print Technology', 'On-site Structural Engineering'].map(item => (
                                <li key={item} className="flex items-center gap-3 font-bold text-sm">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#111] rounded-[3rem] p-12 md:p-20 text-center border border-white/5">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let’s build something <br />extraordinary.</h2>
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-transform"
                        >
                            Start a Project
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;