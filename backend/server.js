import express from "express"
import 'dotenv/config'
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send("Hello world ?")
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})