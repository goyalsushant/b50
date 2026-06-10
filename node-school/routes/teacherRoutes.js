const express = require('express')
const { Teacher, Subject } = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const teacher = Teacher.create(req.body)
        res.status(201)
            .json(teacher)
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})

router.post('/:teacherId/subjects/:subjectId', async (req, res) => {
    try {
        const teacher = Teacher.findByPk(req.params.teacherId)
        const subject = Subject.findByPk(req.params.subjectId)

        await Teacher.addSubject(subject)

        res.status(200)
            .json({
                message: 'Teacher is tagged to the subject'
            })
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})

module.exports = router