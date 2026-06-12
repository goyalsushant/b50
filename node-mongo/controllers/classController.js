const Class = require('../model/Class')

exports.createClass = async (req, res) => {
    try {
        const classRoom = await Class.create(req.body)
        const populatedData = await Class.findById(classRoom._id)
            .populate('subjects')
            .populate('classTeacher')

        res.status(201).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getClasses = async (req, res) => {
    try {
        const populatedData = await Class.find()
            .populate('subjects')
            .populate('classTeacher')

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getClass = async (req, res) => {
    try {
        const populatedData = await Class.findById(req.params.id)
            .populate('subjects')
            .populate('classTeacher')

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.updateClass = async (req, res) => {
    try {
        const populatedData = await Class.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .populate('subjects')
            .populate('classTeacher')

        res.status(200).json(populatedData)
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.deleteClass = async (req, res) => {
    try {
        const populatedData = await Class.findByIdAndDelete(req.params.id)
        res.status(204).json({
            message: 'Deletion Successful'
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}