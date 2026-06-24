import express from 'express'
import { auth } from '../middlewares/authMiddleware.js'
import { validateRole } from '../middlewares/roleMiddleware.js'
import { addCategory } from '../controllers/categoryController.js'

const router = express.Router()

router.post('/', auth, validateRole('admin'), addCategory)

export default router