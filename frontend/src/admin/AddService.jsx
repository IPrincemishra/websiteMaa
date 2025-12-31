import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSave, FaSpinner, FaTimesCircle, FaCheckCircle, FaImage, FaHeading, FaTag, FaAlignLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddService() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        image: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading(true)

        try {
            await axiosInstance.post("/products", formData)

            setSuccess("Service added successfully ✅")
            setFormData({
                title: "",
                category: "",
                description: "",
                image: ""
            })

            toast.success('Service added successfully!');
            setTimeout(() => {
                navigate("/admin/dashboard")
            }, 2000)

        } catch (err) {
            toast.error('Failed to add service');
            setError(err.response?.data?.message || "Failed to add service")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                className="toast-container"
                toastClassName="toast"
            />

            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                    <FaPlus className="text-3xl text-black" />
                    <h1 className="text-3xl font-bold text-gray-900">Add New Service</h1>
                </div>

                {error && (
                    <div className="mb-6 flex items-center gap-3 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
                        <FaTimesCircle className="text-xl" />
                        <span className="font-medium">{error}</span>
                    </div>
                )}

                {success && (
                    <div className="mb-6 flex items-center gap-3 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md">
                        <FaCheckCircle className="text-xl" />
                        <span className="font-medium">{success}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <FaHeading className="inline mr-2 text-gray-500" />
                            Service Title
                        </label>
                        <div className="relative">
                            <FaHeading className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter service title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <FaTag className="inline mr-2 text-gray-500" />
                            Category
                        </label>
                        <div className="relative">
                            <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="category"
                                placeholder="e.g., Hoardings, Flex, LED"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <FaAlignLeft className="inline mr-2 text-gray-500" />
                            Description
                        </label>
                        <div className="relative">
                            <FaAlignLeft className="absolute left-4 top-4 text-gray-400" />
                            <textarea
                                name="description"
                                placeholder="Describe your service in detail..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400 resize-none"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <FaImage className="inline mr-2 text-gray-500" />
                            Image URL
                        </label>
                        <div className="relative">
                            <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="image"
                                placeholder="https://example.com/image.jpg"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-black to-gray-800 text-white py-4 rounded-xl font-semibold transition duration-200 ease-in-out hover:from-gray-800 hover:to-black disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin text-xl" />
                                <span>Adding Service...</span>
                            </>
                        ) : (
                            <>
                                <FaSave className="text-xl" />
                                <span>Add Service</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )

}