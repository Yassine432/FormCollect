const Joi = require("joi");
const formErrors = require('../errors/errors.form'); // Adjust the path as needed

function FormInfovalidator(req, res, next) {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    const formInfovalidatorSchema = Joi.object({
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
        
        phone: Joi.string().optional().pattern(/^[\d\s\-\+\(\)]+$/) 
            .messages({
                "string.pattern.base": formErrors.formError.invalidPhone
            }),
        position: Joi.string().optional().max(255)
            .messages({
                "string.max": formErrors.formError.positionTooLong
            })
    });

    const { value, error } = formInfovalidatorSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map(err => err.message);
        console.log("FormInfovalidator", errors);
        return res.status(400).json({ errors }); 
    } 

    req.body = value; 
    next();
}

module.exports = { FormInfovalidator };