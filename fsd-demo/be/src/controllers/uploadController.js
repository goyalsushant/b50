export const uploadProductImage = async (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            message: 'No File Uploaded'
        })
    }

    res.json({
        url: `/uploads/${req.file.filename}`,
        filename: req.file.filename
    })
}