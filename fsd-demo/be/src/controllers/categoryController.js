import Category from "../models/Category.js"

export const addCategory = async (req, res) => {
    const { name, description } = req.body

    const category = await Category.create({
        name, description
    })

    res.status(201).json({
        message: 'Category Created',
        id: category._id
    })
}