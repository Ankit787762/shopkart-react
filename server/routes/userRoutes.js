//import
const {userLogout,userLogin,getMe} =require('../controllers/Logincontroller');
const signupUser = require('../controllers/Signupcontroller');
const authmiddleware = require("../middleware/authMiddleware");
const express =require('express');
const router =express.Router();

router.post('/login',userLogin);
router.post('/signup',signupUser);
router.post("/logout", userLogout);
router.get("/me", authmiddleware, getMe);
module.exports=router;