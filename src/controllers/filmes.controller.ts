import { Request, Response } from "express";
import filmesService from "../services/filmes.service"
import * as errors from "../errors/errorrs"
import httpStatus from "http-status";
import { filme } from "../protocols/index"

export async function listFilmes(req: Request, res: Response) {
    const list = await filmesService.listFilmes();
    res.status(httpStatus.OK).send(list);
}

export async function createFilme(req: Request, res: Response) {
    const { nome,plataforma,gênero,status }: filme = req.body;
    await filmesService.createFilme(nome,plataforma,gênero,status);
    res.sendStatus(httpStatus.CREATED)
}

export async function deleteBookRelation(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw errors.unprocessableEntity(req.params.id);
    await filmesService.deleteFilmeRelation(id);
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function listByBooks(req: Request, res: Response) {
    const book: string = req.params.book;
    if (!book || book === "") throw errors.unprocessableEntity(book);
    const list = await filmesService.listByBooks(book);
    res.status(httpStatus.OK).send(list);
}

export async function editRelation(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    if (isNaN(id)) throw errors.unprocessableEntity(req.params.id);
    const { book, author }: BookAuthor = req.body;
    await filmesService.editRelation(book, author, id);

    res.sendStatus(httpStatus.OK);
}