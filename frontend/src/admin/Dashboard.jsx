
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUser, FaPlusCircle, FaCogs, FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {

    const navigate = useNavigate()



    return (

        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

            <main className="p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back! 👋</h2>
                    <p className="text-gray-600">Manage your services and portfolio items</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Add New Service Card */}
                    <div
                        onClick={() => navigate("/admin/add-service")}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer border border-gray-100">
                        <div className="flex items-start justify-between mb-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <FaPlusCircle className="text-3xl text-green-600" />
                            </div>
                            <FaArrowRight className="text-gray-400 group-hover:text-black transition-colors duration-200" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Add New Service</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Create a new service or portfolio item with our intuitive form builder.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold text-sm">
                            <span>Get started</span>
                            <FaArrowRight />
                        </div>
                    </div>

                    {/* Manage Services Card */}
                    <div
                        onClick={() => navigate("/admin/manage-services")}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer border border-gray-100">
                        <div className="flex items-start justify-between mb-6">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaCogs className="text-3xl text-blue-600" />
                            </div>
                            <FaArrowRight className="text-gray-400 group-hover:text-black transition-colors duration-200" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Manage Services</h3>
                        <p className="text-gray-600 leading-relaxed">
                            View, edit, and delete existing services. Keep your portfolio up to date.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                            <span>Manage now</span>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;