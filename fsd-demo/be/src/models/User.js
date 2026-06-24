import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid Email']
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            select: false
        },
        phone: {
            type: String,
            match: [/^[6-9]\d{9}$/, 'Invalid Phone Number']
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return

    this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.model('User', userSchema)