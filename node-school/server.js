const express = require('express')
const { sequelize } = require('./models')
const studentRoutes = require('./routes/studentRoutes')
const classRoutes = require('./routes/classRoutes')
const enrollmentRoutes = require('./routes/enrollmentRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

const app = express()
app.use(express.json())

app.use('/classes', classRoutes)
app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)
app.use('/enrollments', enrollmentRoutes)
app.use('/subjects', subjectRoutes)

async function startServer() {
    try {
        await sequelize.authenticate()

        console.log('Database Connected')

        await sequelize.sync({
            alter: true
        })

        console.log('Tables Synced')

        app.listen(3000, () => {
            console.log('Server running on PORT 3000')
        })
    }
    catch (err) {
        console.log(err)
    }
}

startServer()