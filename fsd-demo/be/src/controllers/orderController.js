import Order from '../models/Order.js'

export const createOrder = async (req, res) => {
    const order = await Order.create({
        ...req.body,
        user: req.user._id
    })

    res.status(201).json(order)
}

export const getAllOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id })

    res.json(orders)
}