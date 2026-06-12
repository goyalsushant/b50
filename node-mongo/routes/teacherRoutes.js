const Teacher = require('../model/Teacher')
const { createTeacher, getTeachers, getTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController')
const express = require('express')

const router = express.Router()

router.post('/', createTeacher)
router.get('/', getTeachers)
router.get('/', getTeacher)
router.put('/', updateTeacher)
router.delete('/', deleteTeacher)

module.exports = router