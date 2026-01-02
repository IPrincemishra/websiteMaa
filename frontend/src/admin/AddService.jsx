import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import ServiceForm from "./ServiceForm";

export default function AddService() {
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        await axiosInstance.post("/products", data);
        toast.success("Service added successfully");
        navigate("/admin/manage-services");
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-6">Add Service</h1>
            <ServiceForm onSubmit={handleCreate} submitLabel="Add Service" />
        </div>
    );
}
