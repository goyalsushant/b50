const express = require('express')
const connectDB = require('./config/db')
// const User = require('./model/User')

const studentRoutes = require('./routes/studentRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const classRoutes = require('./routes/classRoutes')
const enrollmentRoutes = require('./routes/enrollmentRoutes')

connectDB()

const app = express()

app.use(express.json())

app.use('/api/students', studentRoutes)
app.use('/api/subjects', subjectRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/class', classRoutes)
app.use('/api/enrollments', enrollmentRoutes)

app.listen(3000, () => {
    console.log('Server Running')
})