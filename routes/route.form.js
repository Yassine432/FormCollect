const express = require('express')
const routerform= express.Router()
const {saveformInfo, saveStep1, saveStep2, saveStep3,saveStep4  } = require('../controllers/controller.form')
//const {formValidation} = require('../middlwars/formValidator')
const {verifyAuhtHeaderToken, adminByID, signOut} = require('../middlewars/authform')
const rateLimit = require('express-rate-limit');
const { FormStep1validator, FormStep2validator, FormStep3validator, FormStep4validator, FormStep5validator } = require('../middlewars/formStepsValidation');


routerform.post('/formInfo', FormStep1validator, saveformInfo)
routerform.post('/formDetail1', FormStep2validator, saveStep1)
routerform.post('/formDetail2', FormStep3validator, saveStep2)
routerform.post('/formDetail3', FormStep4validator, saveStep3)
routerform.post('/formDetail4', FormStep5validator, saveStep4)
routerform.param('adminID', adminByID)
module.exports = routerform
