import express from 'express'
import helmet from 'helmet'
import path from 'path'
import cors from 'cors'
import authRoute from './src/routes/authRoutes.js'
import cartRoute from './src/routes/cartRoutes.js'
import orderRoute from './src/routes/orderRoutes.js'
import productRoute from './src/routes/productRoutes.js'
import categoryRoute from './src/routes/categoryRoutes.js'
import { errorHandler } from './src/middlewares/errorMiddleware.js'
import connectDB from './src/config/db.js'
import { apiLimiter } from './src/middlewares/rateLimitMiddleware.js'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use('/api', apiLimiter)
app.set('query parser', 'extended')

connectDB()

app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/category', categoryRoute)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is running on PORT 3000')
})