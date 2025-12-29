import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("MongoDB Connected 🟢");
    } catch (error) {
        console.error("MongoDB Connection Failed 🔴", error.message);
        throw error;
    }
}

export default connectDB
