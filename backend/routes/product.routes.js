import express from "express"
import { getAllProducts, createProduct, deleteProduct } from "../controllers/productController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

// * GET - Access to all products
router.get("/", getAllProducts)


// * POST - To create new products
router.post("/", authMiddleware, createProduct)


// * DELETE - Delete Product by :ID
router.delete("/:id", authMiddleware, deleteProduct)

export default router
