const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = () => {
    try {
        const { name, email, password } = req.body;
        const oldUser = await User.find({ email });
        if (oldUser) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashPassword });
        res.status(201).json({
            success: true,
            message: "User registration success"
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to register user",
            error: err.message
        })
    }
};

const login = () => { };

const profile = () => { };

const logout = () => { };