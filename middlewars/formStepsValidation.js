const Joi = require("joi");
const formErrors = require('../errors/errors.form'); // Adjust the path as needed
const formStepErrors = require('../errors/errors.stepsform');
function FormStep1validator(req, res, next) {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    const formStep1validatorSchema = Joi.object({
        person: Joi.string().min(3).max(30).required(),
        date: Joi.date().required(),
        email: Joi.string()
            .required()
            .pattern(emailPattern)
            .messages({
                "string.pattern.base": formErrors.formError.email,
                "string.empty": formErrors.formError.emptyEmail,
                "any.required": formErrors.formError.emptyEmail
            })
            .min(3).max(100),
        
        phone: Joi.string().required().pattern(/^[\d\s\-\+\(\)]+$/) 
            .messages({
                "string.pattern.base": formErrors.formError.invalidPhone
            }),
        position: Joi.string().required().max(255)
            .messages({
                "string.max": formErrors.formError.positionTooLong
            })
    });

    const { value, error } = formStep1validatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormStep1validator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value;
    next()
}
function FormStep2validator(req, res, next) {    
    const formStep2validatorSchema = Joi.object({
        nomcooperative: Joi.string().min(3).max(30).required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorNomCooperative.valid,
            "string.empty": formStepErrors.formStepError.errorNomCooperative.empty,
            "any.required": formStepErrors.formStepError.errorNomCooperative.required
        }),
        datecreation: Joi.date().required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorDateCreation.valid,
            "string.empty": formStepErrors.formStepError.errorDateCreation.empty,
            "any.required": formStepErrors.formStepError.errorDateCreation.required
        }),
        secteuractivite: Joi.string().min(3).max(30).required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorSecteurActivite.valid,
            "string.empty": formStepErrors.formStepError.errorSecteurActivite.empty,
            "any.required": formStepErrors.formStepError.errorSecteurActivite.required
        }),
        identifiantICE: Joi.string().min(3).max(30).required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorIdentifiantCommun.valid,
            "string.empty": formStepErrors.formStepError.errorIdentifiantCommun.empty,
            "any.required": formStepErrors.formStepError.errorIdentifiantCommun.required
        }),
        Localisation: Joi.string().optional().max(255)
            .messages({
            "string.pattern.base": formStepErrors.formStepError.errorLocalisation.valid,
            "string.empty": formStepErrors.formStepError.errorLocalisation.empty,
           // "any.required": formStepErrors.formStepError.errorLocalisation.required
            }),
        fromForm: Joi.string().min(3).max(30).required()
    });

    const { value, error } = formStep2validatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormStep2validator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next();
}
function FormStep3validator(req, res, next) {    
    const formStep3validatorSchema = Joi.object({
        nomprenomrepresentant: Joi.string().min(3).max(30).required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorNomPrenomRepresentant.valid,
            "string.empty": formStepErrors.formStepError.errorNomPrenomRepresentant.empty,
            "any.required": formStepErrors.formStepError.errorNomPrenomRepresentant.required
        }),
        membres: Joi.string().valid('less_10', 'between_10_50', 'between_51_100','greater_100').required().messages({
            "string.pattern.base": formStepErrors.formStepError.errorMembres.valid,
            "string.empty": formStepErrors.formStepError.errorMembres.empty,
            "any.required": formStepErrors.formStepError.errorMembres.required
        }),
        histoirecreation: Joi.string().min(3).max(30).optional().messages({
            "string.pattern.base": formStepErrors.formStepError.errorHistoireCreation.valid,
            "string.empty": formStepErrors.formStepError.errorHistoireCreation.empty,
            //"any.required": formStepErrors.formStepError.errorHistoireCreation.required
        }),
        fromForm: Joi.string().min(3).max(30).required()
    });

    const { value, error } = formStep3validatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormStep3validator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next()
}
function FormStep4validator(req, res, next) {    
    const formStep4validatorSchema = Joi.object({
        typesproduits: Joi.array().min(1).required().messages({
            "array.min": formStepErrors.formStepError.errorTypesProduits.valid,
            "any.required": formStepErrors.formStepError.errorTypesProduits.required
        }),
        materiaux: Joi.array().min(1).required().messages({
            "array.min": formStepErrors.formStepError.errorMateriaux.valid,
            "any.required": formStepErrors.formStepError.errorMateriaux.required
        }),
        dispocollab: Joi.array().min(1).required().messages({
            "array.min": formStepErrors.formStepError.errorDispoCollab.valid,
            "any.required": formStepErrors.formStepError.errorDispoCollab.required
        }),
        livraison: Joi.array().min(1).required().messages({
            "array.min": formStepErrors.formStepError.errorLivraison.valid,
            "any.required": formStepErrors.formStepError.errorLivraison.required
        }),
        fromForm: Joi.string().min(3).max(30).required()
    });

    const { value, error } = formStep4validatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormStep4validator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next()    
}
function FormStep5validator(req, res, next) {    
    const formStep5validatorSchema = Joi.object({
        instagram: Joi.string().uri().optional().messages({
            "string.uri": formStepErrors.formStepError.errorInstagram.valid,
            "string.empty": formStepErrors.formStepError.errorInstagram.empty,
            // "any.required": formStepErrors.formStepError.errorInstagram.required
        }),
        facebook: Joi.string().uri().optional().messages({
            "string.uri": formStepErrors.formStepError.errorFacebook.valid,
            "string.empty": formStepErrors.formStepError.errorFacebook.empty,
            //"any.required": formStepErrors.formStepError.errorFacebook.required
        }),
        siteweb: Joi.string().uri().optional().messages({
            "string.uri": formStepErrors.formStepError.errorSiteWeb.valid,
            "string.empty": formStepErrors.formStepError.errorSiteWeb.empty,
           // "any.required": formStepErrors.formStepError.errorSiteWeb.required
        }),
        phone: Joi.string().required().pattern(/^[\d\s\-\+\(\)]+$/) 
        .messages({
            "string.pattern.base": formStepErrors.formStepError.errorPhone.valid,
            "string.empty": formStepErrors.formStepError.errorPhone.empty,
            "any.required": formStepErrors.formStepError.errorPhone.required
        }),
        fromForm: Joi.string().min(3).max(30).required()
    });

    const { value, error } = formStep5validatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormStep5validator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next()
}
module.exports = { FormStep1validator, FormStep2validator, FormStep3validator, FormStep4validator, FormStep5validator };