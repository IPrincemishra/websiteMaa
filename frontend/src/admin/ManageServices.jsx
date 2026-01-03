import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import {
    FaTrash, FaImage, FaBoxOpen, FaSpinner, FaInfoCircle,
    FaCog, FaPlusCircle, FaTag, FaEdit, FaExclamationTriangle,
    FaCheckCircle, FaTimes, FaLayerGroup, FaClock, FaCalendar
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        const fetchServices = async () => {
            try {
                const res = await axiosInstance.get("/products", { signal: controller.signal });
                setServices(res.data.products || []);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    toast.error(err.response?.data?.message || "Failed to load services");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
        return () => controller.abort();
    }, []);

    const handleDelete = async (id) => {
        try {
            setDeletingId(id);
            await axiosInstance.delete(`/products/${id}`);
            setServices((prev) => prev.filter((s) => s._id !== id));
            toast.success("Service deleted successfully!", {
                icon: <FaCheckCircle className="text-white" />
            });
        } catch (err) {
            toast.error(`Could not delete service : ${err.message}`, {
                icon: <FaExclamationTriangle className="text-white" />
            });
        } finally {
            setDeletingId(null);
        }
    };

    const confirmDelete = (service) => {
        toast.warn(
            ({ closeToast }) => (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 max-w-md">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                            <FaExclamationTriangle className="text-amber-600 text-xl" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-amber-900 mb-2">Delete Service</h3>
                            <p className="text-sm text-amber-700">
                                Are you sure you want to delete <strong className="font-semibold">{service.title}</strong>? This action cannot be undone.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button
                            onClick={() => { handleDelete(service._id); closeToast(); }}
                            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2"
                        >
                            <FaTrash /> Delete
                        </button>
                        <button
                            onClick={closeToast}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2"
                        >
                            <FaTimes /> Cancel
                        </button>
                    </div>
                </div>
            ),
            {
                autoClose: false,
                closeOnClick: false,
                closeButton: false,
                style: { background: 'transparent', boxShadow: 'none', padding: 0 }
            }
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-linear-to-br from-gray-50 to-gray-100">
                <div className="relative">
                    <FaSpinner className="text-6xl text-red-600 animate-spin" />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-ping"></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-800 font-semibold text-lg">Loading your services</p>
                    <p className="text-gray-500">Please wait while we fetch your data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                pauseOnHover
                theme="colored"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-4">
                            <div className="w-14 h-14 bg-linear-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-lg">
                                <FaLayerGroup className="text-white text-2xl" />
                            </div>
                            Manage Services
                        </h1>
                        <p className="text-gray-600 mt-2 text-lg">Create, update, and organize your business offerings</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3 bg-white px-5 py-2 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="text-right flex items-center justify-center gap-2">
                                <FaInfoCircle className="text-red-500 text-xl" />
                                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Total Services : </div>
                                <div className="text-2xl font-bold text-gray-900">{services.length}</div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/admin/add-service')}
                            className="bg-linear-to-r from-black to-gray-800 text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 font-semibold"
                        >
                            <FaPlusCircle className="text-lg" />
                            Add Service
                        </button>
                    </div>
                </header>


                {services.length === 0 ? (
                    <div className="bg-white rounded-3xl p-16 text-center border-2 border-dashed border-gray-200 shadow-sm">
                        <div className="w-24 h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaBoxOpen className="text-5xl text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your catalog is empty</h2>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">Start building your service portfolio to showcase your offerings to potential clients.</p>
                        <button
                            onClick={() => navigate('/admin/add-service')}
                            className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg inline-flex items-center gap-3"
                        >
                            <FaPlusCircle className="text-xl" />
                            Create Your First Service
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service._id}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative h-56 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                                    {service.image ? (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <FaImage className="text-6xl text-gray-300" />
                                        </div>
                                    )}

                                    {service.category && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/20">
                                                <FaTag className="inline mr-1" />
                                                {service.category}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>


                                <div className="p-6 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 grow">
                                        {service.description}
                                    </p>


                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                        <button
                                            onClick={() => navigate(`/admin/edit-service/${service._id}`)}
                                            className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 bg-blue-50 text-red-600 hover:bg-blue-100 hover:text-red-700 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                        <button
                                            disabled={deletingId === service._id}
                                            onClick={() => confirmDelete(service)}
                                            className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {deletingId === service._id ? (
                                                <FaSpinner className="animate-spin" />
                                            ) : (
                                                <FaTrash />
                                            )}
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageServices