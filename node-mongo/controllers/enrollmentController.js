const Enrollment = require('../model/Enrollments')

exports.createEnrollments = async (req, res) => {
    try {
        const enrollment = await Enrollment.create(req.body)
        const populatedData = await Enrollment.findById(enrollment._id)
            .populate('student')
            .populate('class')

        res.status(201).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getEnrollments = async (req, res) => {
    try {
        const populatedData = await Enrollment.find()
            .populate('student')
            .populate({
                path: 'class',
                populate: [
                    {
                        path: 'subjects'
                    },
                    {
                        path: 'classTeacher'
                    }
                ]
            })

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getEnrollment = async (req, res) => {
    try {
        const populatedData = await Enrollment.findById(req.params.id)
            .populate('student')
            .populate({
                path: 'class',
                populate: [
                    {
                        path: 'subjects'
                    },
                    {
                        path: 'classTeacher'
                    }
                ]
            })

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.updateEnrollment = async (req, res) => {
    try {
        const populatedData = await Enrollment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .populate('student')
            .populate('class')

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.deleteEnrollment = async (req, res) => {
    try {
        const populatedData = await Enrollment.findByIdAndDelete(req.params.id)
            
        res.status(204).json({
            message: 'Deletion Successful'
        })
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}