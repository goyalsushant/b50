const express = require('express')
const { Student, Subject } = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const {studentId, subjectId} = req.body

        const student = await Student.findByPk(studentId)
        const subject = await Subject.findByPk(subjectId)

        await student.addSubject(subjectId)

        res.json({
            message: 'Student enrolled successfully'
        })
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})

module.exports = router