import { APIFeatures } from "../utils/apiFeature.js"
import Product from "../models/Product.js"

export const getProducts = async (req, res) => {
    const features = new APIFeatures(Product.find(), req.query)
        .filter()
        .search()
        .sort()
        .paginate()

    const products = await features.query

    // to do count
    res.json({
        total: products.length,
        products
    })
}

export const createProduct = async (req, res) => {

    let imageUrl = ''

    if (req.file) {
        imageUrl = `/uploads/${req.file.filename}`
    }

    const product = await Product.create({
        ...req.body,
        images: imageUrl ? [{ url: imageUrl }] : []
    })

    res.status(201).json(product)
}

export const getProduct = async (req, res) => {
    const product = await Product.find({ slug: req.params.id })

    if (!product) {
        return res.status(404).json({
            message: 'Product Not Found'
        })
    }

    res.json(product)
}

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(product)
}

export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({
        message: 'Product Removed'
    })
}