import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import "dotenv/config"
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

const seedAdmin = async () => {

    try {
        await connectDB()

        const existingAdmin = await Admin.findOne({
            email: process.env.EMAIL_USER
        })

        if (existingAdmin) {
            throw new Error("Admin already exits");
        }

        const hashedPassword = await bcrypt.hash(
            process.env.EMAIL_PASS,
            10
        )

        await Admin.create({
            email: process.env.EMAIL_USER,
            password: hashedPassword,
            role: "owner"

        })
        console.log("Admin seeded successfully");


    } catch (error) {
        console.error(error);
        await mongoose.connection.close();
    }

}

seedAdmin()