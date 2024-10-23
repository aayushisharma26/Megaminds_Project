import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    tags:{
        type:[String],
        required:true
    },
    image:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
        required:true
    }

})

const Search = mongoose.model('Search', searchSchema);

export default Search;