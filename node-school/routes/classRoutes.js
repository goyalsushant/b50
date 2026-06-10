const express = require('express')
const router = express.Router()

const { Class } = require('../models')

router.post('/', async (req, res) => {
    try {
        const data = await Class.create(req.body)
        res.status(201)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Class.findAll()
        res.status(200)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router