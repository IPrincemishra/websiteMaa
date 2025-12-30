import jwt from "jsonwebtoken"
import Admin from "../models/Admin.js"

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            throw new Error("Not authorized, Token missing")
        }

        const token = authHeader.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const admin = await Admin.findById(decoded.id).select("-password")

        if (!admin) {
            throw new Error("Not authorized, admin not found")
        }

        req.admin = admin

        next()

    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message || "Unauthorized"
        })
    }
}


export default authMiddleware