import Search from '../schema/searchProduct.js';

const searchPost = async(req,res)=>{
    try{
        const {name,tags,image,price,description}=req.body;
        const newProduct = new Search({name,tags,image,price,description});
        const savedProduct= await newProduct.save();
        res.status(201).json(savedProduct) ;
    }
    catch (err){
        res.send().status(500).json({error:"Product is not save"})

    }
}


export {searchPost};