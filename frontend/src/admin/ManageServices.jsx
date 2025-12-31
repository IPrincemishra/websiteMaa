import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import {
    FaTrash,
    FaImage,
    FaBoxOpen,
    FaSpinner,
    FaInfoCircle
} from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

export default function ManageServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    const fetchServices = async () => {
        try {
            const res = await axiosInstance.get("/products");
            setServices(res.data.products);
        } catch (err) {
            toast.error(err.message || "Failed to load services");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this service?"
        );

        if (!confirmDelete) return;

        try {
            setDeletingId(id);
            await axiosInstance.delete(`/products/${id}`);
            setServices((prev) =>
                prev.filter((service) => service._id !== id)
            );
            toast.success("Service deleted successfully");
        } catch (err) {
            toast.error(err.message || "Failed to delete service");
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <FaSpinner className="animate-spin text-3xl text-gray-600" />
            </div>
        );
    }

    if (services.length === 0) {
        return (
            <div className="bg-white p-8 rounded-xl shadow text-center">
                <FaBoxOpen className="text-4xl text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                    No services found
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            {/* Toasts */}
            <ToastContainer
                position="top-right"
                autoClose={2500}
                pauseOnHover
                closeOnClick
                draggable
                theme="colored"
            />

            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Manage Services
                    </h1>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                        <FaInfoCircle className="text-blue-500" />
                        {services.length} service{services.length !== 1 && "s"} found
                    </span>
                </div>

                {services.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center border border-dashed border-gray-300">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <FaImage className="text-3xl text-gray-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                            No services yet
                        </h2>
                        <p className="text-sm text-gray-500">
                            Start by adding your first service from the “Add New Service”
                            section.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div
                                key={service._id}
                                className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            >
                                {/* Image */}
                                {service.image ? (
                                    <div className="relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ) : (
                                    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
                                        <FaImage className="text-gray-400 text-3xl" />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-5 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                        {service.category && (
                                            <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1">
                                                {service.category}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        disabled={deletingId === service._id}
                                        className="inline-flex justify-center cursor-pointer items-center gap-2 text-xs font-semibold rounded-full px-4 py-2
                                 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700
                                 disabled:opacity-60 disabled:cursor-not-allowed
                                 transition-colors duration-200"
                                    >
                                        <FaTrash />
                                        {deletingId === service._id
                                            ? "Deleting..."
                                            : "Delete"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
