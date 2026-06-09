const errorHandler = (err, req, res, next) => {
    res.status(500 || err.statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error'
    })
}

module.exports = errorHandler