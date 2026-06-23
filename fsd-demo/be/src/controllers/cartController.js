import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body
    const product = await Product.findById(productId)

    let cart = await Cart.findOne({ user: req.user._id })

    if (!cart) {
        cart = await Cart.create({ user: req.user._id, items: [] })
    }

    const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
    )

    if (itemIndex > -1) {
        cart.items[itemIndex].quatity += quantity
    }
    else {
        cart.items.push({
            product: productId,
            quantity,
            price: product.price
        })
    }

    cart.totalAmount = cart.items.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
    )

    await cart.save()

    res.json(cart)

}

export const removeFromCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id })
    await Cart.findByIdAndDelete(cart._id)

    res.status(204).json({
        message: 'Cart removed'
    })
}