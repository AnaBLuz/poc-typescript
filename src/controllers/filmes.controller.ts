import { Request, Response } from "express";
import filmesService from "../services/filmes.service"
import * as errors from "../errors/errorrs"
import httpStatus from "http-status";
import { filme, status } from "../protocols/index"


async function listFilmes(req: Request, res: Response) {
    const list = await filmesService.listFilmes();
    res.status(httpStatus.OK).send(list);
}

async function createFilme(req: Request, res: Response) {
   const { nome,plataforma,gênero,status }: filme = req.body;
   await filmesService.createFilme(nome,plataforma,gênero,status);
   res.sendStatus(httpStatus.CREATED)
}

async function updateStatus(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { status }: status = req.body;
    await filmesService.updateStatus(id,status);
    res.sendStatus(httpStatus.OK)
}

async function deleteFilme(req: Request, res: Response){
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw errors.unprocessableEntity(req.params.id);
    await filmesService.deleteFilme(id);
    res.sendStatus(httpStatus.OK);
}


const filmesController = { listFilmes,createFilme,updateStatus,deleteFilme };

export default filmesController