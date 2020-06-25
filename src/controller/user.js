const {
    User
} = require('../models');
const bcrypt = require('bcrypt');

exports.userslist = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            msg: err
        })

    }

}

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }

}

exports.userlist = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'failure',
            message: err
        })

    }
}

exports.userUpdate = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {

        res.status(400).json({
            status: 'fail',
            msg: err
        })

    }
}

exports.deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }

}


exports.userLogin = (req, res) => {
    const user = User.findOne({
        username: req.body.username
    });

    bcrypt.compare('req.body.password', user.password, (err, matched) => {
        if (err) throw new Error("Password failed to match")
        console.log("Password matched");
    })
}