import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'success', 'failed'],
            default: 'pending'
        },
        paymentMethod: {
            type: String,
            enum: ['COD', 'Card', 'UPI'],
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('Payment', paymentSchema)