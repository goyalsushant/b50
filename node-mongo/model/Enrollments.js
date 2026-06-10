const mongoose = require('mongoose')

const enrollmentsSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true
        }
        ,
        enrollmentData: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
)

enrollmentsSchema.index(
    { student: 1, class: 1 },
    { unique: true }
)

module.exports = mongoose.model('Enrollments', enrollmentsSchema)