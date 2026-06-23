import express from 'express'
import { createOrder, getAllOrders } from '../controllers/orderController.js'
import { auth } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/', auth, createOrder)
router.get('/my-orders', auth, getAllOrders)

export default router