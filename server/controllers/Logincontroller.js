const User = require('../data/user');

const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "user is not registered"
        });
    }

    const ismatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!ismatch) {
        return res.status(400).json({
            message: "invalid credential"
        });
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    res.status(200).json({
        user
    });
};


const userLogout = (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    res.json({ success: true });
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "server error"
        });
    }
};


module.exports = {
    userLogin,
    userLogout,
    getMe
};