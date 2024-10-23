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


const searchGet = async (req, res) => {
    try {
        const { tags } = req.query;

        if (!tags) {
            return res.status(400).json({ error: "Tags query parameter is required" });
        }

        const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

        const products = await Search.find({
            tags: {
                $all: tagsArray.map(tag => new RegExp(`^${tag}$`, 'i'))  
            }
        });

        if (products.length === 0) {
            return res.status(404).json({ message: "No Product Found" });
        }

        res.status(200).json(products);

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};


export {searchPost,searchGet};