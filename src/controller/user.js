const {
    User
} = require("../models");
const bcrypt = require("bcrypt");
const {
    sign,
    verify
} = require("jsonwebtoken");
const {
    ACCESS_TOKEN_EXPIRY,
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY,
    REFRESH_TOKEN_EXPIRY
} = require("../config");

exports.userslist = async (req, res) => {
    try {

        const test = {
            ...req.query
        }
        console.log(test);
        const users = await User.find();
        res.status(201).json({
            status: "success",
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err,
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.userlist = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err,
        });
    }
};

exports.userUpdate = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'successfully deleted'
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.userLogin = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })

        let accessToken;
        let refreshToken;

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, matched) => {
                if (err) throw new Error("Password failed to match");
                if (matched) {
                    accessToken = sign({
                        userId: user.id,
                        type: "accessToken"
                    }, JWT_ACCESS_SECRET_KEY, {
                        expiresIn: ACCESS_TOKEN_EXPIRY
                    })

                    refreshToken = sign({
                        userId: user.id,
                        type: "refreshToken"
                    }, JWT_REFRESH_SECRET_KEY, {
                        expiresIn: REFRESH_TOKEN_EXPIRY
                    })

                    res.status(200).json({
                        status: 'success',
                        accessToken,
                        refreshToken,
                        expiry_refresh: REFRESH_TOKEN_EXPIRY,
                        expiry_access: ACCESS_TOKEN_EXPIRY
                    })


                } else {
                    throw new Error("User not found");
                }
            })
        }


    } catch (err) {
        res.status(400).json({
            status: 'fail to login',
            message: err
        })
    }
}