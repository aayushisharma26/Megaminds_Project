import Cart from '../schema/cartSchema.js';
import Product from '../schema/productSchema.js';

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        // Check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // Check if product is already in cart
            const existingProductIndex = cart.products.findIndex(p => p.productId.equals(productId));
            
            if (existingProductIndex > -1) {
                // If product exists, update quantity
                cart.products[existingProductIndex].quantity += quantity;
            } else {
                // If product doesn't exist, add new product to cart
                cart.products.push({ productId, quantity });
            }
        } else {
            // If no cart exists, create a new one
            cart = new Cart({
                userId,
                products: [{ productId, quantity }]
            });
        }

        await cart.save();
        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// import Cart from '../schema/cartSchema.js';

// Function to get all carts for a user
const getAllCarts = async (req, res) => {
    const { userId } = req.user; // Assuming you're getting userId from authenticated user

    try {
        const cart = await Cart.findOne({ userId }).populate('products.productId');
        
        if (!cart) {
            return res.status(404).json({ message: 'No cart found for this user' });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export { addToCart, getAllCarts }; // Export both functions



// export { addToCart };







