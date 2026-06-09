const sequelize = require('../config/database')

const Class = require('./Class')
const Enrollments = require('./Enrollments')
const Student = require('./Student')
const Subject = require('./Subject')
const Teacher = require('./Teacher')

Class.hasMany(Student)
Student.belongsTo(Class)

Teacher.belongsToMany(Subject, {
    through: 'TeacherSubjects'
})

Subject.belongsToMany(Teacher, {
    through: 'TeacherSubjects'
})

Student.belongsToMany(Subject, {
    through: Enrollments
})

Subject.belongsToMany(Student, {
    through: Enrollments
})

module.exports = {
    sequelize,
    Class,
    Teacher,
    Student,
    Enrollments,
    Subject
}