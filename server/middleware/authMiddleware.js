const jwt = require("jsonwebtoken");

const authmiddleware = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        const token = authorization?.startsWith("Bearer ")
            ? authorization.slice(7)
            : req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "token is not found"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "invalid token"
        });
    }
};

module.exports = authmiddleware;