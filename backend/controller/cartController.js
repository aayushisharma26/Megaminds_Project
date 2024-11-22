// import Cart from '../schema/cartSchema.js';
// import Product from '../schema/productSchema.js';

// const addToCart = async (req, res) => {
//     const { userId, productId, quantity } = req.body;

//     try {
//         // Check if product exists
//         const product = await Product.findById(productId);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Find the user's cart or create a new one if it doesn't exist
//         let cart = await Cart.findOne({ userId });

//         if (cart) {
//             // Check if product is already in cart
//             const existingProductIndex = cart.products.findIndex(p => p.productId.equals(productId));
            
//             if (existingProductIndex > -1) {
//                 // If product exists, update quantity
//                 cart.products[existingProductIndex].quantity += quantity;
//             } else {
//                 // If product doesn't exist, add new product to cart
//                 cart.products.push({ productId, quantity });
//             }
//         } else {
//             // If no cart exists, create a new one
//             cart = new Cart({
//                 userId,
//                 products: [{ productId, quantity }]
//             });
//         }

//         await cart.save();
//         res.status(200).json({ message: "Product added to cart", cart });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };

// export { addToCart };











import Cart from '../schema/cartSchema.js';
import Product from '../schema/productSchema.js';

const addToCart = async (req, res) => {
    const { userId,productId, quantity } = req.body; // `userId` will come from the authenticated user
    // const userId = req.user.id; // Assuming `req.user` contains authenticated user info

    try {
        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Find the user's cart or create one
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // Check if the product already exists in the cart
            const productIndex = cart.products.findIndex((p) => p.productId.equals(productId));
            if (productIndex > -1) {
                // If product exists, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // If product doesn't exist, add it to the cart
                cart.products.push({ productId, quantity });
            }
        } else {
            // Create a new cart for the user
            cart = new Cart({
                userId,
                products: [{ productId, quantity }]
            });
        }

        // Save the cart
        await cart.save();
        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const getAllCarts = async (req, res) => {
    try {
        // Fetch all carts and populate the product details
        const carts = await Cart.find().populate({
            path: "products.productId",
            model: Product, // Reference the Product schema
            select: "name price description image", // Include only necessary fields
        });

        if (!carts || carts.length === 0) {
            return res.status(404).json({ message: "No carts found" });
        }

        res.status(200).json({ carts });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


export { addToCart ,getAllCarts};
