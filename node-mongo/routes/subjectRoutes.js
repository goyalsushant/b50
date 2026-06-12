const { createSubject, getSubject, getSubjects, updateSubject, deleteSubject } = require('../controllers/subjectController')
const Subject = require('../model/Subject')
const express = require('express')

const router = express.Router()

router.post('/', createSubject)
router.get('/', getSubjects)
router.get('/:id', getSubject)
router.put('/:id', updateSubject)
router.delete('/:id', deleteSubject)

module.exports = router