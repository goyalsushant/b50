const Student = require('../model/Student')

exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body)

        res.status(201).json(student)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getStudents = async (req, res) => {
    try {
        const student = await Student.find()

        res.status(201).json(student)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)

        res.status(201).json(student)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}