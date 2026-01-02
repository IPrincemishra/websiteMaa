import express from "express"
import { getAllProducts, createProduct, deleteProduct, updateProduct, getProductById } from "../controllers/productController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

// * GET - Access to all products
router.get("/", getAllProducts)

router.get("/:id", getProductById);


// * POST - To create new products
router.post("/", authMiddleware, createProduct)


// * DELETE - Delete Product by :ID
router.delete("/:id", authMiddleware, deleteProduct)


// * PUT - Update Product by :ID
router.put("/:id", authMiddleware, updateProduct)

export default router
