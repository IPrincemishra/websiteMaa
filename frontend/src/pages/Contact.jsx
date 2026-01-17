import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaPhoneAlt />,
            label: "Call Us",
            value: "+91 XXXXXXXXXX",
            href: "tel:+91XXXXXXXXXX",
            color: "bg-red-50 text-red-600"
        },
        {
            icon: <FaEnvelope />,
            label: "Email Us",
            value: "info@maaadvertising.com",
            href: "mailto:info@maaadvertising.com",
            color: "bg-slate-50 text-slate-600"
        },
        {
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            value: "Message on WhatsApp",
            href: "https://wa.me/91XXXXXXXXXX",
            color: "bg-green-50 text-green-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            <section className="pt-28 pb-16 md:pt-40 md:pb-32 bg-slate-900 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
                        Let's Start a <span className="text-red-500">Project.</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        Ready to elevate your brand's presence? Reach out for a custom consultation
                        and quotation for our outdoor advertising services.
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-20 pb-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

                    <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">Contact Information</h2>

                            <div className="space-y-6 md:space-y-8">
                                {contactInfo.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        className="flex items-center gap-4 md:gap-5 group"
                                    >
                                        <div className={`w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-lg transition-transform group-hover:scale-110 shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">

                                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5 md:mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-slate-900 font-semibold text-sm md:text-lg truncate">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}

                                <div className="flex items-start gap-4 md:gap-5 pt-4 md:pt-6 border-t border-slate-50">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center text-lg shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5 md:mb-1">Our Location</p>
                                        <p className="text-slate-900 font-semibold text-sm md:text-base leading-relaxed">
                                            Phase 7, Industrial Area,<br /> Mohali, Chandigarh - 160055
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-48 md:h-64 bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-inner relative group">
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <p className="text-slate-400 font-bold uppercase tracking-tighter text-xs md:text-sm">
                                    Interactive Map Integration
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl shadow-slate-200/60 border border-slate-100">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Send an Enquiry</h2>
                            <p className="text-slate-500 text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-900 ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-red-500 transition-all outline-none text-slate-900 text-sm md:text-base" />
                                    </div>
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-900 ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-red-500 transition-all outline-none text-slate-900 text-sm md:text-base" />
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-900 ml-1">Email Address</label>
                                    <input type="email" placeholder="john@company.com" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-red-500 transition-all outline-none text-slate-900 text-sm md:text-base" />
                                </div>

                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-900 ml-1">Service Required</label>
                                    <div className="relative">
                                        <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-red-500 transition-all outline-none text-slate-900 text-sm md:text-base appearance-none cursor-pointer">
                                            <option>Outdoor Hoardings</option>
                                            <option>LED Display Screens</option>
                                            <option>Flex Printing</option>
                                            <option>Custom Fabrication</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            ▼
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-900 ml-1">Your Message</label>
                                    <textarea rows="4" placeholder="How can we help you?" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-red-500 transition-all outline-none text-slate-900 text-sm md:text-base resize-none"></textarea>
                                </div>

                                <button className="w-full bg-red-600 text-white font-bold py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-[0.98] text-sm md:text-base">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}