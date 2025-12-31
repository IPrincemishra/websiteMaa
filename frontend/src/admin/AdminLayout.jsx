import { useAuth } from "../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

export default function AdminLayout() {
    const { admin, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <header className="bg-linear-to-r from-gray-900 to-black text-white px-8 py-5 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                    <FaUser className="text-2xl" />
                    <h1
                        onClick={() => navigate("/admin/dashboard")}
                        className="text-2xl font-bold cursor-pointer"
                    >
                        Admin Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
                        <FaUser className="text-sm" />
                        <span className="text-sm font-medium">
                            {admin?.email}
                        </span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-md"
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="p-8">
                <Outlet />
            </main>
        </div>
    );
}
