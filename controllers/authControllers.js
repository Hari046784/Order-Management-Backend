const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");


module.exports.register = async (req,res) => {
    try {
        const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({username});
    if(usernameCheck) {
        return res.json({
            message: "User name already used", status: false
        });
    };
    const emailCheck = await User.findOne({email});
    if(emailCheck) {
        return res.json({
            message: "Email already used", status: false
        });
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    delete user.password;
    return res.json({status: true, user});
    }catch (error) {
        res.json({
            message: "Internal Server Error", status: false
        });
    };
};

module.exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(user) {
            const isMatching = await bcrypt.compare(password, user.password);
            if(isMatching) {
                const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
                res.cookie('entrytoken', token, {expire: new Date() + 86400000});

                const {_id, email} = user;
                return res.json({
                    token: token,
                    userID: _id,
                    email: email,
                    message: "User signed in successfully",
                    status: true,
                    user
                });
            }
            return res.json({
                message: "Incorrect email or password", status: false
            });
        }
        return res.json({message: "User not found", status: false});
    }catch (error) {
        res.json({
            message: "Internal Server Error", status: false
        });
    };
};