// import mongoose from "mongoose";

// const searchSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true

//     },
//     tags:{
//         type:[String],
//         required:true
//     },
//     image:{
//         type:String,
//         required:true,

//     },
//     price:{
//         type:Number,
//         required:true

//     },
//     description:{
//         type:String,
//         required:true
//     }

// })

// const Search = mongoose.model('Search', searchSchema);

// export default Search;

import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number, // ⭐ Product Rating (Optional)
        default: null
    },
    extraDetails: {
        type: Map, // ✅ Dynamic Extra Details (Any key-value pairs)
        of: String 
    }
});

const Search = mongoose.model('Search', searchSchema);
export default Search;
