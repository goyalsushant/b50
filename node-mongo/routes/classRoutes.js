const express = require('express')
const { createClass, deleteClass, getClass, getClasses, updateClass } = require('../controllers/classController')
const router = express.Router()

router.post('/', createClass)
router.get('/', getClasses)
router.get('/:id', getClass)
router.put('/:id', updateClass)
router.delete('/:id', deleteClass)

module.exports = router