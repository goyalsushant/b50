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
            min: 0,
            validate: {
                validator: function (v) {
                    return !v || v < this.price;
                },
                message: "Discount price must be less than price"
            }
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
        images: {
            type: [
                {
                    url: String,
                    altText: String
                }
            ],
            default: []
        },
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
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true
        }
    },
    { timestamps: true }
)

productSchema.pre("save", function () {
    if (this.name) {
        this.slug = this.name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-");
    }
    // next();
});

productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ name: "text" });

export default mongoose.model('Product', productSchema)