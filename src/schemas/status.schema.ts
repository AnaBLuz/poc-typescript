import Joi from "joi";
import { status } from "protocols";

export const statusSchema = Joi.object<status>({
    status: Joi.string().required
})