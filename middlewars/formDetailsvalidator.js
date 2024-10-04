const Joi = require("joi");
const formErrors = require('../errors/errors.form'); // Adjust the path as needed

function FormDetailsvalidator(req, res, next) {

    const formDetailsvalidatorSchema = Joi.object({
        nomcooperative: Joi.string().min(3).max(30).required(),
        datecreation: Joi.date().required(),
        secteuractivite: Joi.string().min(3).max(30).required(),
        identifiantICE: Joi.string().min(3).max(30).required(),
        Localisation: Joi.string().optional().max(255)
            .messages({
                "string.max": formErrors.formError.positionTooLong
            }),
        nomprenomrepresentant: Joi.string().min(3).max(30).required(),
        membres: Joi.string().min(3).max(30).required(),
        histoirecreation: Joi.string().min(3).max(30).required(),
        typesproduits: Joi.array().required(),
        materiaux: Joi.array().required(),
        dispocollab: Joi.array().required(),
        livraison: Joi.array().required(),
        instagram: Joi.string().min(3).max(30).required(),
        facebook: Joi.string().min(3).max(30).required(),
        siteweb: Joi.string().min(3).max(30).required(),
        phone: Joi.string().optional().pattern(/^[\d\s\-\+\(\)]+$/) 
        .messages({
            "string.pattern.base": formErrors.formError.invalidPhone
        }),
        fromForm: Joi.string().min(3).max(30).required(),
    });

    const { value, error } = formDetailsvalidatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormInfovalidator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next();
}

module.exports = { FormDetailsvalidator };