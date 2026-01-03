import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import {
    FaImage,
    FaArrowLeft,
    FaPhoneAlt,
    FaCheckCircle,
    FaCalendarAlt,
    FaTags
} from "react-icons/fa";

export default function ServiceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axiosInstance.get(`/products/${id}`);
                setService(res.data.product || res.data);
            } catch {
                navigate("/services");
            } finally {
                setLoading(false);
            }
        };
        fetchService();
        window.scrollTo(0, 0); // Reset scroll on entry
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh]">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-red-600 rounded-full animate-spin" />
                <p className="mt-4 text-slate-500 font-medium animate-pulse">Loading project details...</p>
            </div>
        );
    }

    if (!service) return null;

    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="group inline-flex items-center gap-2 text-sm font-bold text-slate-900"
                    >
                        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                        <span className="uppercase tracking-widest">Back to Projects</span>
                    </button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

                    <div className="lg:col-span-7">
                        <div className="relative group">
                            {service.image ? (
                                <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-slate-200">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover aspect-4/3 md:aspect-16/10 transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-16/10 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100">
                                    <FaImage className="text-7xl text-slate-200" />
                                </div>
                            )}

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 bg-red-50 px-3 py-1 rounded-full">
                                    <FaTags size={10} />
                                    {service.category || "Advertising"}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                {service.title}
                            </h1>

                            <div className="flex items-center gap-6 text-sm text-slate-500 border-y border-slate-100 py-4">
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span>Premium Quality</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <span>Quick Turnaround</span>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                {service.description}
                            </p>


                            <div className="pt-8 space-y-4">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                                >
                                    Get a Custom Quote
                                </button>

                                <a
                                    href="tel:+91XXXXXXXXXX"
                                    className="w-full inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                                >
                                    <FaPhoneAlt size={14} />
                                    Speak with an Expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mt-20 md:mt-32 pt-16 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs">Durability</h4>
                            <p className="text-slate-500 text-sm">Weather-resistant fabrication designed to withstand extreme Chandigarh climates.</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs">Installation</h4>
                            <p className="text-slate-500 text-sm">Full-service professional installation with structural safety certification.</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs">Customization</h4>
                            <p className="text-slate-500 text-sm">Tailored dimensions and lighting options including Front-lit, Back-lit, and 3D Neon.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}