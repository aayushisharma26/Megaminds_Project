import mongoose from "mongoose";

const Search = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    tags:{
        type:[String],
        required:true
    },
    image:{
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