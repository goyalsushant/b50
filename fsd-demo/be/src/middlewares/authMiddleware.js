import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const auth = (req, res, next) => {
    //  Bearer <token>
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    // const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    }
    catch (err) {
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }
}