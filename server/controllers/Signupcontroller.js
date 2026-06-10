const User = require('../data/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignup=async(req,res)=>{
const {firstName,lastName,email,password}=req.body;
const userexist =await User.findOne({email});
if(userexist){
    return res.status(400).json({
        message:"user is already exist"
    })
}
const hashPassword = await bcrypt.hash(password,10);
//Now save the user.
const user =await  User.create({
    firstName,
    lastName,
    email,
    password:hashPassword
})

const token = jwt.sign(
{
   id:user._id
},
process.env.JWT_SECRET
);

// frontend store it
res.status(201).json({
    token,
    user
});

}
module.exports=userSignup;