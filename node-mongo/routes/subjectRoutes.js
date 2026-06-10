const Subject = require('../model/Subject')
const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const subject = await Subject.create(req.body)
        const populatedData = await Subject.findById(subject._id)
            .populate('teacher')

        res.status(201).json(populatedData)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// router.get('/', async (req, res) => {
//     try {
//         const teacher = await Teacher.find()
//         res.status(200).json(teacher)
//     }
//     catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

module.exports = router