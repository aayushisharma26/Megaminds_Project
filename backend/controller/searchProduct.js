// import Search from '../schema/searchProduct.js';

// const searchPost = async(req,res)=>{
//     try{
//         const {name,tags,image,price,description}=req.body;
//         const newProduct = new Search({name,tags,image,price,description});
//         const savedProduct= await newProduct.save();
//         res.status(201).json(savedProduct) ;
//     }
//     catch (err){
//         res.status(500).json({ error: "Product is not saved" });


//     }
// }


// // const searchGet = async (req, res) => {
// //     try {
// //         const { tags } = req.query;

// //         if (!tags) {
// //             return res.status(400).json({ error: "Tags query parameter is required" });
// //         }

// //         const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

// //         const products = await Search.find({
// //             tags: { $in: tagsArray }  // 🔥 सही Query ऑपरेटर
// //         });

// //         if (products.length === 0) {
// //             return res.status(404).json({ message: "No Product Found" });
// //         }

// //         res.status(200).json(products);

// //     } catch (err) {
// //         res.status(500).json({ error: "Failed to fetch products" });
// //     }
// // };



// const searchGet = async (req, res) => {
//     try {
//         const { tags } = req.query;

//         if (!tags) {
//             return res.status(400).json({ error: "Tags query parameter is required" });
//         }

//         // ✅ Fix: Convert spaces to commas & lowercase conversion
//         const tagsArray = tags.replace(/\s+/g, ',').split(',').map(tag => tag.trim().toLowerCase());

//         // ✅ Fix: Case-insensitive search using regex
//         const products = await Search.find({
//             tags: { $in: tagsArray.map(tag => new RegExp(tag, 'i')) }  
//         });

//         if (products.length === 0) {
//             return res.status(404).json({ message: "No Product Found" });
//         }

//         res.status(200).json(products);

//     } catch (err) {
//         res.status(500).json({ error: "Failed to fetch products" });
//     }
// };










// export {searchPost,searchGet};








import mongoose from "mongoose";

import Search from '../schema/searchProduct.js';

// ✅ POST: Add New Product
const searchPost = async (req, res) => {
    try {
        const { name, tags, image, price, description } = req.body;

        if (!name || !tags || !image || !price || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newProduct = new Search({ name, tags, image, price, description });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: "Product is not saved" });
    }
};

// // ✅ GET: Fetch Products (By Tags OR All Products)
// const searchGet = async (req, res) => {
//     try {
//         const { tags } = req.query;
//         let products;

//         if (!tags) {
//             // ✅ Agar tags nahi diye, toh sabhi products bhejo
//             products = await Search.find();
//         } else {
//             // ✅ Spaces ko comma se replace karke, lowercase me convert karo
//             const tagsArray = tags.replace(/\s+/g, ',').split(',').map(tag => tag.trim().toLowerCase());

//             // ✅ Case-insensitive search
//             products = await Search.find({
//                 tags: { $in: tagsArray.map(tag => new RegExp(tag, 'i')) }
//             });
//         }

//         if (products.length === 0) {
//             return res.status(404).json({ message: "No Product Found" });
//         }

//         res.status(200).json(products);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to fetch products" });
//     }
// };


const searchGet = async (req, res) => {
    try {
        const { tags } = req.query;
        let products;

        if (!tags) {
            products = await Search.find();
        } else {
            // Search Query ko Format Karo
            const tagsArray = tags.replace(/\s+/g, ',').split(',').map(tag => tag.trim().toLowerCase());

            products = await Search.find({
                tags: { $in: tagsArray.map(tag => new RegExp(tag, 'i')) }
            });

            // ✅ Ye Condition Sirf Tab Lagao Jab "Men" ya "Jeans" Search Ho
            if (tagsArray.includes("men") || tagsArray.includes("jeans")) {
                products = products.filter(product => !product.tags.some(tag => tag.toLowerCase().includes("women")));
            }
        }

        if (products.length === 0) {
            return res.status(404).json({ message: "No Product Found" });
        }

        res.status(200).json(products);
    } catch (err) {
        console.log("🔥 Error:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};



const getSearchById = async (req, res) => {
    try {
        const { id } = req.params;  // URL से id प्राप्त करें
        console.log("📌 Received ID:", id); // Debugging

        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        // MongoDB से product खोजें
        const product = await Search.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error("🔥 Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



export { searchPost, searchGet, getSearchById };





