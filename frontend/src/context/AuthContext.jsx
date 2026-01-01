import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadAdmin = async () => {
            if (!token) {
                setLoading(false)
                return
            }

            try {
                const res = await axiosInstance.get("/admin/me")
                setAdmin(res.data.admin)
            } catch (err) {
                localStorage.removeItem("token")
                setToken(null)
                setAdmin(null)
            } finally {
                setLoading(false)
            }
        }

        loadAdmin()
    }, [token])

    const login = async (credentials) => {
        try {
            const res = await axiosInstance.post("/admin/login", credentials)

            const { token, admin } = res.data

            localStorage.setItem("token", token)
            setToken(token)
            setAdmin(admin)

            return { success: true }

        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || "Login Failed"
            }
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
        setAdmin(null)
    }

    return (
        <AuthContext.Provider value={{
            admin, token, loading, isAuthenticated: !!token && !!admin,
            login,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => useContext(AuthContext)