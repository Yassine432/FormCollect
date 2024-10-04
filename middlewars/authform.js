let formErrors = require('./../errors/errors.form')
//const user = require('./../models/model.')

const fs = require('fs');
const jwt = require('jsonwebtoken');

const { decrypt } = require('../utils/crypte')

exports.verifyAuhtHeaderToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader)
        return res.json({error: formErrors.formError.Unauthorized})

    const certPathPublic = process.env.PUBLIC_KEY_PATH;

    try {
        const cert = fs.readFileSync(certPathPublic)

        const tokenKeys = {
            iv: req.params.myIV,
            content: authHeader.split(' ')[1]
        }

        jwt.verify(decrypt(tokenKeys), cert, { algorithms: ['RS512'] }, (err, user) => {
            if (err) {
                return res.status(403).json({ error: formErrors.formError.Unauthorized });
            }

            if(user._id !== req.params.adminID)
                return res.status(401).json({error: formErrors.formError.Unauthorized})

            console.log("auth 1 => OK")
            next()
        });
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error: err})
    }
}

exports.adminByID = async (req, res, next, id) => {
    try {
        if(!req.params.adminID || req.params.adminID == "null")
            return res.status(401).json({error: formErrors.formError.Unauthorized})

        const admin = await user.findById(id)

        if(!admin)
            res.status(404).json({error: formErrors.formError.checkThisEmailIfNotExist})

        admin.password = undefined;
        req.userInfo = admin

        next()
    }
    catch(err) {

    }
}

exports.signOut = (req, res) => {
    const cookies = req.cookies;

    for (const cookieName in cookies) {
      res.clearCookie(cookieName);
    }

    res.json({
        message: formErrors.formError.Disconnected
    })
}