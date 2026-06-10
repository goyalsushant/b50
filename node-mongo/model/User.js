const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    age: {
        type: Number,
        min: 18
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'manager']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    }
})

module.exports = mongoose.model('User', userSchema)

// const createUser = async() => {
//     const user = await User.create({
//         age: 25,
//         name: 'John'
//     })
// }

// createUser()