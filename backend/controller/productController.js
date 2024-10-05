import Product from '../schema/productSchema.js';

const product_post = async (req, res) => {
    const { category, name, price, description, image } = req.body;
    try {
        const newProduct = new Product({ category, name, price, description, image });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });


    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error });

    }

}


const get_product = async (req, res) => {

    try {
        const d = await Product.find({})
        res.send({
            message: "All Post",
            user: d
        })

    }
    catch (err) {
        res.send({
            message: "Post not found",
            error: err
        })
    }

}




export { product_post ,get_product}