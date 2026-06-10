const Teacher = require('../model/Teacher')
const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body)
        res.status(201).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const teacher = await Teacher.find()
        res.status(200).json(teacher)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router