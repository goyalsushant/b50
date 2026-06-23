import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 120,
            minLength: 2
        },
        description: {
            type: String,
            required: true,
            minLength: 20
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        discountPrice: {
            type: Number,
            min: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        },
        images: [
            {
                url: String,
                altText: String
            }
        ],
        ratingsAverage: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        ratingsCount: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('Product', productSchema)