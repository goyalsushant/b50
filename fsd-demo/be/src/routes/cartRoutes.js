import express from 'express'
import { addToCart } from '../controllers/cartController.js'
import { auth } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/', auth, addToCart)

export default router