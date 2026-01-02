import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import ServiceForm from "./ServiceForm";
import { FaEdit, FaSpinner } from "react-icons/fa";

export default function EditService() {
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
                toast.error("Failed to load service");
                navigate("/admin/manage-services");
            } finally {
                setLoading(false);
            }
        };
        fetchService();
    }, [id, navigate]);

    const handleUpdate = async (data) => {
        await axiosInstance.put(`/products/${id}`, data);
        toast.success("Service updated successfully");
        navigate("/admin/manage-services");
    };

    if (loading) {
        return <FaSpinner className="animate-spin text-3xl mx-auto mt-20" />;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-6 flex  justify-center gap-1"><FaEdit className="text-3xl text-black" />Edit Service</h1>
            <ServiceForm
                initialData={service}
                onSubmit={handleUpdate}
                submitLabel="Update Service"
            />
        </div>
    );
}
