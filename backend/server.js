import express from "express"
import 'dotenv/config'
import cors from "cors"
import morgan from "morgan"
import connectDB from "./config/db.js"
import adminRoutes from "./routes/admin.routes.js"

const app = express()
connectDB()
const PORT = process.env.PORT || 8000

// middleware 
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


// routes
app.use("/api/admin", adminRoutes)







app.get('/', (req, res) => {
    res.send("Hello world ?")
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})