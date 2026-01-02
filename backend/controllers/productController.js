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

// * /api/products - UPDATE - Delete Product by :ID

export const updateProduct = async (req, res) => {
    try {
        const { title, category, description, image } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title, category, description, image },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Service not found!"
            });
        }

        res.status(200).json(updatedProduct);

    } catch (error) {
        console.error("UPDATE ERROR:", error);
        res.status(500).json({
            message: "Failed to update service!"
        });
    }
};


export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch service" });
    }
};