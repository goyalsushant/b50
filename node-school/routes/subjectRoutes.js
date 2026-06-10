const express = require('express')
const { Subject, Teacher } = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const subject = Subject.create(req.body)

        res.status(201)
            .json(subject)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const subjects = await Subject.findAll({
            include: Teacher
        })

        res.json(subjects)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router