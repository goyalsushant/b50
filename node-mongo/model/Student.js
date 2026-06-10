const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: /^\S+@\S+\.\S+$/
        },
        age: {
            type: Number,
            min: 5,
            max: 50
        }
    },
    {
        timestamps: true
    }
)

studentSchema.pre('save', async function (next) {
    console.log('Executed before student document is added')
    // next()
})

studentSchema.post('save', function (doc) {
    console.log(`Executed after student ${doc.firstName} document is added`)
})

module.exports = mongoose.model('Student', studentSchema)