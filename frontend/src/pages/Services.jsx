import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { FaImage, FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axiosInstance.get("/products");
                setServices(res.data.products || []);
            } catch {
                // Silent fail for public robustness
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header / Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
                {/* Decorative Background blur - Hidden on tiny screens to improve performance */}
                <div className="hidden sm:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 md:w-96 md:h-96 bg-red-50 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 md:mb-8">
                        <span className="cursor-pointer hover:text-slate-900 transition-colors" onClick={() => navigate("/")}>Home</span>
                        <FaChevronRight size={8} />
                        <span className="text-slate-900">Services</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 md:mb-6 leading-[1.1]">
                            Precision Fabrication & <br />
                            <span className="text-red-600">Outdoor Advertising.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Specializing in high-impact hoardings, LED displays, and custom fabrication
                            that commands attention across the Chandigarh Tri-city area.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Grid Section */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
                {loading ? (
                    /* Responsive Skeleton Loader */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="animate-pulse">
                                <div className="bg-slate-100 aspect-4/3 rounded-2xl mb-6" />
                                <div className="h-4 bg-slate-100 w-1/4 rounded mb-4" />
                                <div className="h-8 bg-slate-100 w-3/4 rounded" />
                            </div>
                        ))}
                    </div>
                ) : services.length === 0 ? (
                    <div className="text-center py-20 md:py-32 border-2 border-dashed border-slate-100 rounded-3xl">
                        <FaImage className="text-slate-200 text-5xl md:text-6xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-slate-900">No Services Found</h3>
                        <p className="text-slate-500 text-sm px-4">Our portfolio is currently being updated with new projects.</p>
                    </div>
                ) : (
                    /* The Grid: 1 col on mobile, 2 on tablet, 3 on desktop */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16">
                        {services.map((service) => (
                            <article
                                key={service._id}
                                className="group cursor-pointer flex flex-col h-full"
                                onClick={() => navigate(`/services/${service._id}`)}
                            >
                                {/* Image Container with Responsive Aspect Ratio */}
                                <div className="relative aspect-4/3 sm:aspect-square lg:aspect-4/3 overflow-hidden rounded-2xl bg-slate-50 mb-5 md:mb-7 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                                    {service.image ? (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-95"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <FaImage className="text-slate-200 text-4xl" />
                                        </div>
                                    )}
                                    {/* Mobile-only overlay hint */}
                                    <div className="absolute inset-0 bg-slate-900/0 group-active:bg-slate-900/5 sm:group-hover:bg-slate-900/10 transition-colors duration-300" />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col grow space-y-3">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                                        {service.category || "General Advertising"}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Link with responsive arrow movement */}
                                    <div className="pt-2 mt-auto flex items-center gap-2 text-xs md:text-sm font-bold text-slate-900 transition-all duration-300">
                                        <span className="uppercase tracking-wider border-b-2 border-transparent group-hover:border-red-600 transition-all">
                                            View Project
                                        </span>
                                        <FaArrowRight size={10} className="text-red-600 transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}