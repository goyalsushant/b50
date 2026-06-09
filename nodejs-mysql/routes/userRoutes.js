const express = require('express')
const router = express.Router()
// const db = require('../config/db')
const User = require('../models/User')

// router.get('/', (req, res) => {
//     await pool.query('SELECT * FROM users)
//     db.query('SELECT * FROM users', (err, result) => {
//         if(err) {
//             // console.log(err)
//             return res.status(500).json(err)
//         }

//         res.json(result)
//     })
// })

// router.post('/', (req, res) => {
//     const {name, email} = req.body
//     // `insert into users(name, email) values (${name}, ${email})`
//     db.query('insert into users(name, email) values (?,?)', [name, email], (err, result) => {
//         if(err) {
//             return res.status(500).json(err)
//         }
//         res.json({
//             message: 'User Added',
//             id: result.insertId
//         })
//     })
// })

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            name: 'Alisha',
            email: 'alisha@email.com'
        })
        res.json({
            status: true,
            data: user.dataValues
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err
        })
    }

    // console.log(user)
    // res.status
})

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json({
            status: true,
            data: users
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.json({
            status: true,
            data: users
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const users = await User.update(
            { name: 'Jack', email: 'jack@email.com' },
            {
                where: { id: req.params.id }
            }
        )
        res.json({
            status: true,
            data: users
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        
        const result = await User.destroy({
            where: { id: req.params.id }
        })
        console.log('delete', result)
        res.status(204).json({
            status: true,
            message: 'User Deleted'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            status: false,
            message: err
        })
    }
})

module.exports = router