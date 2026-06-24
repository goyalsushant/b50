export const uploadProductImage = async (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            message: 'No File Uploaded'
        })
    }

    // update full url
    res.json({
        url: `${process.env.BASE_URL}/uploads/${req.file.filename}`,
        filename: req.file.filename
    })
}

// http://localhost:5173/upload/fiename.jpg

// http://localhost:3000/uploads/filename.jpg