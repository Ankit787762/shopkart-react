const User = require('../data/user');
const bcrypt = require("bcryptjs");
const jwt =require('jsonwebtoken');

const userLogin=async(req,res)=>{
const {email,password} =req.body;

const user =await User.findOne({email});

if(!user){
    return res.status(400).json({
        messsage:"user is not registered"
    })
}

const ismatch = await bcrypt.compare(
    password,
    user.password
)
if(!ismatch){
     return res.status(400).json({
        messsage:"invalid credential"
    })
}

const token = jwt.sign(
{
    id:user._id
},
process.env.JWT_SECRET
);

res.status(200).json({
    token,
    user
});

}
module.exports = userLogin;