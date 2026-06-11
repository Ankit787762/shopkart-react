const jwt = require('jsonwebtoken');

const authmiddleware = async(req,res,next)=>{
    try {
        //  Get token from request header
        const authHeader = req.headers.authorization;
        if(!authHeader){
            res.status(404).json({
                message:"token is not found"
            })
        }
        // Verify token using jwt.verify()
        // ["Bearer", "abc.xyz.123"]   we need "abc.xyz.123"
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET

        )
        // User info save karta hai
        req.user = decoded;
        //next function call
        next();
    } catch (error) {
        res.status(401).json({
            message:"invalid token"
        })
    }
}

module.exports=authmiddleware