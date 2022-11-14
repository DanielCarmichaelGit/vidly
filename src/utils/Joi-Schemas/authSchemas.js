import Joi from 'joi-browser';

export const loginSchema = {
    schema: {
        username: Joi.string().required(),
        password: Joi.string().required()
    },
    options: {
        abortEarly: false
    }
};