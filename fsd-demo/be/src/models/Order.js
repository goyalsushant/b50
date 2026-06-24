import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    min: 1,
                    required: true
                },
                price: Number
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        shippingAddress: {
            fullname: String,
            address: String,
            city: String,
            postalCode: String,
            country: String,
            phone: String
        },
        orderStatus: {
            type: String,
            enum: ['processing', 'shipped', 'delivered', 'cancelled'],
            default: 'processing'
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'success', 'failed'],
            default: 'pending'
        }
    },
    { timestamps: true }
)

export default mongoose.model('Order', orderSchema)