import Joi from 'joi';

const nameSchema = Joi.string().min(4).required();
const categorySchema = Joi.number().min(1).max(3).required();
const priceSchema = Joi.number().min(1).required();

export default function validate(values) {

    const errors = {};
    const { error: errorName } = nameSchema.validate(values.name);
    const { error: errorCategory } = categorySchema.validate(values.category);
    const { error: errorPrice } = priceSchema.validate(values.price);

    if(errorName) {
        errors.error_name = "Ingresa un nombre de al menos 4 caracteres.";
    }

    if(errorCategory) {
        errors.error_category = "Ingresa un valor de categoría válido.";
    }

    if(errorPrice) {
        errors.error_price = "El precio debe ser mayor a 0.";  
    }

    return errors;


}