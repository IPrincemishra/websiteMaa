import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaEnvelope, FaLock, FaExclamationCircle } from "react-icons/fa";

const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setLoading(true)

        const result = await login({ email, password })
        setLoading(false)

        if (result.success) {
            navigate("/admin/dashboard")
        } else {
            setError("Server Error !")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 hover:shadow-2xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                        <FaSignInAlt className="text-white text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
                    <p className="text-gray-600 text-sm mt-1">Access your dashboard</p>
                </div>

                {error && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <FaExclamationCircle />
                        <span className="text-sm">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm transition duration-200 ease-in-out focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 hover:border-gray-400"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-lg font-medium transition duration-200 ease-in-out hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Logging in...
                            </>
                        ) : (
                            <>
                                <FaSignInAlt />
                                Login
                            </>
                        )}
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Login;