import Admin from "../models/Admin.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email && !password) {
            throw new Error("Email & Password are required")
        }

        const admin = await Admin.findOne({ email })

        if (!admin) {
            throw new Error("Invalid Credentials")
        }

        const isMatchPass = await bcrypt.compare(password, admin.password)

        if (!isMatchPass) {
            throw new Error("Invalid Credentials")
        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            success: true,
            token,
            admin: {
                id: admin._id,
                email: admin.email,
                role: admin.role
            }
        })

    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}

export const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select("-password")

        if (!admin) {
            return res.status(404).json({
                message: "Admin not found!"
            })
        }

        res.status(200).json({ admin })

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}