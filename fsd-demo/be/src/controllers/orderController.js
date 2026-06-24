import Order from '../models/Order.js'

export const createOrder = async (req, res) => {

    const { items: reqItems, totalAmount, shippingAddress } = req.body
    const items = reqItems.map(item => ({
        ...item,
        product: item.productId
    }))
    console.log(req.user)
    const order = await Order.create({
        items,
        totalAmount,
        shippingAddress,
        user: req.user.id
    })

    res.status(201).json(order)
}

export const getAllOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
        .populate('items.product')

    res.json(orders)
}