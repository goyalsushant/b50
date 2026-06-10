const express = require('express')
const { Student, Class, Subject } = require('../models')
const { where } = require('sequelize')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const data = await Student.create({
            name: req.body.name,
            email: req.body.email,
            ClassId: req.body.classId
        })
        res.status(201)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Student.findAll({
            include: [Class, Subject]
        })
        res.status(200)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await Student.findByPk(req.params.id, {
            include: [Class, Subject]
        })
        res.status(200)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await Student.update({
            where: { id: req.params.id }
        })
        res.status(200)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Student.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
            .json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router