import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js'
import { validateRole } from '../middlewares/roleMiddleware.js'
import { auth } from '../middlewares/authMiddleware.js'
import { upload } from '../middlewares/uploadMiddleware.js'
import { uploadProductImage } from '../controllers/uploadController.js'

const router = express.Router()

router.route('/')
    .get(getProducts)
    .post(auth, validateRole('admin'), createProduct)

router.post('/product-image', auth, validateRole('admin'), upload.single('image'), uploadProductImage)

router.route('/:id')
    .get(getProduct)
    .put(auth, validateRole('admin'), updateProduct)
    .delete(auth, validateRole('admin'), deleteProduct)

export default router