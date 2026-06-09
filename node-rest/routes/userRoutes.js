const express = require('express')

const router = express.Router()
const validateUser = require('../middleware/validateUser')

const {createUser, getUserById, getUsers} = require('../routeHandlers/userRoute')

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', validateUser, createUser)

module.exports = router