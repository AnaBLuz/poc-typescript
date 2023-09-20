import Joi from "joi";
import { filme } from "protocols";

export const filmeSchema = Joi.object<filme>({
    nome: Joi.string().required(),
    plataforma: Joi.string().required(),
    gênero: Joi.string().required(),
    status: Joi.string().required()

})