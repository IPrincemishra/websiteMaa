import { useNavigate } from "react-router-dom";
import { FaEye, FaRocket, FaUsers, FaAward, FaBuilding, FaHandshake } from "react-icons/fa";

export default function About() {
    const navigate = useNavigate();

    const stats = [
        { label: "Years Experience", value: "15+", icon: <FaBuilding /> },
        { label: "Successful Projects", value: "2500+", icon: <FaRocket /> },
        { label: "Happy Clients", value: "1200+", icon: <FaUsers /> },
        { label: "Industry Awards", value: "12", icon: <FaAward /> },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section: Responsive padding and font sizes */}
            <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Turning Concepts into <br />
                        <span className="text-red-500">Urban Landmarks.</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
                        MAA Advertising is Chandigarh's premier outdoor media agency,
                        specializing in high-impact fabrication and strategic brand visibility.
                    </p>
                </div>
            </section>

            {/* Stats Bar: 2x2 grid on mobile, 4-col on desktop */}
            <section className="relative -mt-10 md:-mt-16 max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white p-6 md:p-12 shadow-xl shadow-slate-200/60 rounded-2xl md:rounded-3xl border border-slate-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center space-y-1 md:space-y-2">
                            <div className="text-red-600 flex justify-center text-xl md:text-2xl mb-1 md:mb-2">{stat.icon}</div>
                            <div className="text-xl md:text-4xl font-black text-slate-900">{stat.value}</div>
                            <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision: Vertical stack on mobile, horizontal on desktop */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="space-y-10 md:space-y-12">
                        <div className="space-y-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-xl md:rounded-2xl flex items-center justify-center text-red-600">
                                <FaRocket size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                To empower brands by providing world-class outdoor advertising
                                infrastructure. We don't just print flex; we build durable
                                communication channels that withstand time and elements.
                            </p>
                        </div>

                        <div className="space-y-4 text-left">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-900">
                                <FaEye size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                To redefine the skyline of Northern India with sustainable,
                                innovative, and technologically advanced LED and fabrication
                                solutions that bridge the gap between brands and people.
                            </p>
                        </div>
                    </div>

                    {/* Image Placeholder: Scaled for mobile */}
                    <div className="relative mt-8 lg:mt-0">
                        <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-100">
                            <div className="text-slate-300 text-center p-8 md:p-12">
                                <FaBuilding className="text-7xl md:text-9xl mx-auto mb-4 opacity-20" />
                                <p className="font-bold uppercase tracking-widest text-xs md:text-sm italic">Corporate Excellence</p>
                            </div>
                        </div>
                        {/* Decorative floating card: Hidden on smaller mobile devices for cleanliness */}
                        <div className="absolute -bottom-6 -left-6 bg-red-600 p-4 md:p-6 rounded-2xl shadow-xl hidden sm:block">
                            <FaHandshake className="text-white text-3xl md:text-4xl mb-2" />
                            <p className="text-white text-xs md:text-sm font-bold">Trusted by 1000+ <br />Local Businesses</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section: 1 col -> 2 col -> 3 col responsive grid */}
            <section className="bg-slate-50 py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Core Principles</h2>
                    <p className="text-slate-600 text-sm md:text-base">The foundation of every project we undertake.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { title: "Integrity", desc: "Transparent pricing and honest material specifications for every fabrication project." },
                        { title: "Quality", desc: "Using premium-grade steel and weather-proof inks to ensure long-lasting visibility." },
                        { title: "Innovation", desc: "Constant investment in the latest LED technology and 3D printing capabilities." }
                    ].map((value, i) => (
                        <div key={i} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 hover:border-red-500 transition-all duration-300 group">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-red-600 transition-colors">{value.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section: Padding adjustments for thumb-friendly mobile buttons */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="bg-red-600 rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-10">Ready to dominate the skyline?</h2>
                        <button
                            onClick={() => navigate("/contact")}
                            className="w-full sm:w-auto bg-white text-red-600 px-8 md:px-12 py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
                        >
                            Let's Work Together
                        </button>
                    </div>
                    {/* Background decorations: Scaled down for mobile */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-black/5 rounded-full translate-y-1/3 -translate-x-1/3" />
                </div>
            </section>
        </div>
    );
}