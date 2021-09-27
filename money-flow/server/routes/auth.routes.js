// const express = require('express');
// const router = express.Router();

const { User } = require('../models/user.model');
const { HashPassword, ComparePassword } = require('../services/password.service');
const {UserDto} = require('../dto/user.dto');
const { SignToken } = require('../services/jwt.service');
const router = require('express').Router();

// SIGNUP
router.post('/signup', async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body

    const existedUser = await User.findOne({
        email
    })

    if (existedUser) return res.status(400).json({
        msg: "User Already Exists"
    })


    const user = new User({
        name,
        email
    })

    const hashedPassword = HashPassword(password);

    user.password = hashedPassword;

    await user.save();
    

    res.status(201).json({
        msg: 'User Created Successfully'
    })

})


// SIGNIN
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;


    const user = await User.findOne({
        email
    });

    if (!user) return res.status(401).json({
        msg: "Invalid Credentials"
    })

    const isValidPassword = ComparePassword(password, user.password);

    if (!isValidPassword) return res.status(401).json({
      msg: "Invalid Credentials",
    });

    const userData = UserDto(user);

    const token = SignToken(userData)


    res.status(200).json({
        user: userData,
        token
    })


})


module.exports = router


