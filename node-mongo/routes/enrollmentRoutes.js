const express = require('express')
const { createEnrollments, deleteEnrollment, getEnrollment, getEnrollments, updateEnrollment } = require('../controllers/enrollmentController')
const router = express.Router()

router.post('/', createEnrollments)
router.get('/', getEnrollments)
router.get('/:id', getEnrollment)
router.put('/:id', updateEnrollment)
router.delete(':id', deleteEnrollment)

module.exports = router