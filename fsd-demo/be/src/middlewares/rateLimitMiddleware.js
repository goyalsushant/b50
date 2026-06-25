import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10000,
    message: 'Too Many Requests, please try again later.'
})