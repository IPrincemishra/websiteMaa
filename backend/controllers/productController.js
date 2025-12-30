import Product from "../models/Product.js";

//* /api/products - GET - Access to all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            count: products.length,
            products
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products" + err.message
        })
    }
}

// * /api/products - POST - To create new products
export const createProduct = async (req, res) => {
    try {
        const { title, category, description, image } = req.body

        if (!title || !category || !description || !image) {
            throw new Error("All fields are required")
        }

        const product = await Product.create({
            title,
            category,
            description,
            image
        })

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// * /api/products - DELETE - Delete Product by :ID
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            throw new Error("Product not found")
        }

        await product.deleteOne()

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}