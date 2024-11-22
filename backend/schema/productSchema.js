import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   category: {
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
// });

// const Product = mongoose.model("Product", productSchema);
// export default Product;




// const mongoose = require('mongoose');

// Product Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String], // Array of tags
        required: true
    },
    image: {
        type: String, // Image URL
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create model from schema
const Product = mongoose.model('Product', productSchema);

export default Product;








