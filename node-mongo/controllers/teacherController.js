const Teacher = require("../model/Teacher")

exports.createTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body)
        res.status(201).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getTeachers = async (req, res) => {
    try {
        const teacher = await Teacher.find()
        res.status(200).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
        res.status(200).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        res.status(200).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id)
        res.status(204).json({
            message: 'Deletion Successful'
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}