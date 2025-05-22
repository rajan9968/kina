const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../helper/mailer');
const userModel = require('../models/userModel');


const registerUser = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const passHash = await bcrypt.hash(password, 10);

        const user = new userModel({
            name,
            email,
            mobile,
            password: passHash,
        });

        const savedUser = await user.save();

        // Check if user was saved
        if (savedUser && savedUser._id) {
            // Send Email
            const mailOptions = {
                from: `"Maddison Foo Koch" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "Welcome to Our Platform",
                text: "Thank you for registering.",
                html: "<b>Thank you for registering with us!</b>",
            };

            await transporter.sendMail(mailOptions);

            return res.status(201).json({ message: "User registered successfully. Confirmation email sent." });
        } else {
            return res.status(500).json({ message: "User could not be saved." });
        }


    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" });
        }
        // campare Password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        // generate Token 
        const token = jwt.sign({
            email: user.email,
            id: user._id,
            name: user.name,
            mobile: user.mobile,
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                token: token,
                user: {
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                }
            }
        });


    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    registerUser,
    LoginUser
}
