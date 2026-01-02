import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
    FaSave,
    FaSpinner,
    FaHeading,
    FaTag,
    FaAlignLeft,
    FaImage,
} from "react-icons/fa";

export default function ServiceForm({
    initialData = {},
    onSubmit,
    submitLabel = "Save",
    loadingExternal = false
}) {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        image: ""
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialData && Object.keys(initialData).length > 0) {
            setFormData({
                title: initialData.title || "",
                category: initialData.category || "",
                description: initialData.description || "",
                image: initialData.image || ""
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.category || !formData.description) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            setLoading(true);
            await onSubmit(formData);
        } catch (error) {
            toast.error(`Something went wrong : ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const isSubmitting = loading || loadingExternal;

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FaHeading className="inline mr-2 text-gray-500" />
                        Service Title
                    </label>
                    <div className="relative">
                        <FaHeading className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter service title"
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FaTag className="inline mr-2 text-gray-500" />
                        Category
                    </label>
                    <div className="relative">
                        <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                        <input
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="e.g., Hoardings, Flex, LED"
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FaAlignLeft className="inline mr-2 text-gray-500" />
                        Description
                    </label>
                    <div className="relative">
                        <FaAlignLeft className="absolute left-4 top-6 text-gray-400 text-lg z-10" />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe your service in detail..."
                            rows={4}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400 resize-none"
                            required
                        />
                    </div>
                </div>

                {/* Image */}
                <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FaImage className="inline mr-2 text-gray-500" />
                        Image URL (optional)
                    </label>
                    <div className="relative">
                        <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-base transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-black to-gray-800 text-white py-4 rounded-xl font-semibold transition duration-200 ease-in-out hover:from-gray-800 hover:to-black disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    {isSubmitting ? (
                        <>
                            <FaSpinner className="animate-spin text-xl" />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <FaSave className="text-xl" />
                            <span>{submitLabel}</span>
                        </>
                    )}
                </button>
            </form>
        </>
    );
}
