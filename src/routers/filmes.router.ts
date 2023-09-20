import { Router } from 'express';
import filmesController from "../controllers/filmes.controller"
import schemaValidation from "../middlewares/schemaValidation.middleware"
import { filmeSchema } from "../schemas/filme.schema"
//import { statusSchema } from "../schemas/status.schema"


const filmesRouter = Router();

filmesRouter.get('/filmes',filmesController.listFilmes);
filmesRouter.post('/filmes',schemaValidation(filmeSchema),filmesController.createFilme);
filmesRouter.patch('/filmes/:id',filmesController.updateStatus);
filmesRouter.delete('/filmes/:id',filmesController.deleteFilme);

export default filmesRouter