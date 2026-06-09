const users = require('../data/users')

exports.getUsers = (req, res) => {
    res.status(200)
    res.json({
        success: true,
        count: users.length,
        data: users
    })
}

exports.getUserById = (req, res, next) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)

    if (!user) {
        const error = new Error('User not found')
        error.statusCode = 404
        return next(error)
    }
    res.status(200)
    res.json({
        success: true,
        data: user
    })
}

exports.createUser = (req, res) => {
    const { name, email } = req.body

    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name,
        email
    }

    users.push(newUser)

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    })
}