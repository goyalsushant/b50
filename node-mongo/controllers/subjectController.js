const Subject = require('../model/Subject')

exports.createSubject = async (req, res) => {
    try {
        const subject = await Subject.create(req.body)
        const populatedData = await Subject.findById(subject._id)
            .populate('teacher')

        res.status(201).json(populatedData)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('teacher')
        res.status(200).json(subjects)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getSubject = async (req, res) => {
    try {
        const subjects = await Subject.findById(req.param.id).populate('teacher')
        res.status(200).json(subjects)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(
            req.param.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        res.status(200).json(subject)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.deleteSubject = async (req, res) => {
    try {
        const subjects = await Subject.findByIdAndDelete(req.param.id)
        res.status(204).json({
            message: 'Deletion Successful'
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}