const mongoose = require('mongoose')

const classSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        section: {
            type: String,
            required: true
        },
        classTeacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher"
        },
        subjects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject"
            }
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model('Class', classSchema)