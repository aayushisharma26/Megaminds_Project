import mongoose from "mongoose";
import Search from '../schema/searchProduct.js';

// ✅ POST: Add New Product
const searchPost = async (req, res) => {
    try {
        const { name, tags, image, price, description, rating, extraDetails } = req.body;

        if (!name || !tags || !image || !price || !description) {
            return res.status(400).json({ error: "All required fields must be filled" });
        }

        const newProduct = new Search({
            name,
            tags,
            image,
            price,
            description,
            rating, // Optional
            extraDetails // ✅ Dynamic Extra Details (can be anything)
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error("🔥 Error saving product:", err);
        res.status(500).json({ error: "Failed to save product" });
    }
};

// ✅ GET: Fetch Products (By Tags OR All Products)
const searchGet = async (req, res) => {
    try {
        const { tags } = req.query;
        let products;

        if (!tags) {
            products = await Search.find();
        } else {
            // Convert input to lowercase for case-insensitive search
            const tagsArray = tags.toLowerCase().split(",").map(tag => tag.trim());

            // Fetch products matching any of the tags
            products = await Search.find({
                tags: { $in: tagsArray.map(tag => new RegExp(`\\b${tag}\\b`, 'i')) } // ✅ Exact match using word boundary
            });

            // ✅ Exclude wrong matches for "men" and "women" categories
            if (tagsArray.includes("men")) {
                products = products.filter(product =>
                    !product.tags.some(tag => tag.toLowerCase().includes("women"))
                );
            }

            if (tagsArray.includes("women")) {
                products = products.filter(product =>
                    !product.tags.some(tag => tag.toLowerCase().includes("men"))
                );
            }

            // ✅ Prevent "t-shirt" from showing "shirt"
            if (tagsArray.includes("t-shirt")) {
                products = products.filter(product =>
                    !product.tags.some(tag => tag.toLowerCase().includes("shirt") && !tag.toLowerCase().includes("t-shirt"))
                );
            }

            // ✅ Prevent "dress" from showing "saree"
            if (tagsArray.includes("dress")) {
                products = products.filter(product =>
                    !product.tags.some(tag => tag.toLowerCase().includes("saree"))
                );
            }
        }

        if (products.length === 0) {
            return res.status(404).json({ message: "No Product Found" });
        }

        res.status(200).json(products);
    } catch (err) {
        console.error("🔥 Error fetching products:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};


// ✅ GET: Fetch Single Product by ID
const getSearchById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const product = await Search.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error("🔥 Error fetching product by ID:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export { searchPost, searchGet, getSearchById };
