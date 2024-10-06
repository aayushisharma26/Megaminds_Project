import Product from '../schema/productSchema.js';

const product_post = async (req, res) => {
    const { category, name, price, description, image } = req.body;

    try {
        const newProduct = new Product({ category, name, price, description, image });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
};




const get_product = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products }); 
    } catch (err) {
        res.status(500).json({
            message: "Products not found",
            error: err.message,
        });
    }
};



const getBYId= async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
}


  

export { product_post, get_product,getBYId};
