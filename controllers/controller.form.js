
//const User = require('../models/model.formInfo')
const UserInfo = require('../models/model.formInfo')
//const FormDetails = require('../models/model.FormDetails')
const FormStep1 = require('../models/model.formStep1')
const FormStep2 = require('../models/model.formStep2')
const FormStep3 = require('../models/model.formStep3')
const FormStep4 = require('../models/model.formStep4')


//let formErrors = require('../errors/errors.form')

exports.saveformInfo = async (req, res) => {
    try {
        // if(req.body.confirmPass !== req.body.password || !req.body.confirmPass) {
        //     return res.status('400').json({error:formErrors.formError.passwordAndConfirmPasswordIsMatch})
        // }

        const form = new UserInfo(req.body)
        await form.save()
        
        res.json({form})
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}

// exports.saveFormDetails = async (req,res) => {
//     try {
        
//         // const form = new UserInfo(req.body)
//         // await form.save()
        
//         const formDetails = new FormDetails(req.body);
//         await formDetails.save();
//         res.json(formDetails)
//     }
//     catch(error) {
//         console.log(error)
//         res.status(400).json({error: error})
//     }
// }
exports.saveStep1 = async (req,res) => {
    try {
        
        // const form = new UserInfo(req.body)
        // await form.save()
        
        const formStep1 = new FormStep1(req.body);
        await formStep1.save();
        res.json(formStep1)
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}
exports.saveStep2 = async (req,res) => {
    try {
        
        // const form = new UserInfo(req.body)
        // await form.save()
        
        const formStep2 = new FormStep2(req.body);
        await formStep2.save();
        res.json(formStep2)
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}
exports.saveStep3 = async (req,res) => {
    try {
        
        // const form = new UserInfo(req.body)
        // await form.save()
        
        const formStep3 = new FormStep3(req.body);
        await formStep3.save();
        res.json(formStep3)
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}
exports.saveStep4 = async (req,res) => {
    try {
        
        // const form = new UserInfo(req.body)
        // await form.save()
        
        const formStep4 = new FormStep4(req.body);
        await formStep4.save();
        res.json(formStep4)
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}