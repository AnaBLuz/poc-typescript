import { FullRelation, RequestLista, ServerResponse } from "../protocols/index";
import * as errors from "../errors/errorrs"
import db from "../database/database.connection"


async function listFilmes() {
    
    const filmes = await filmesRepository.listFilmes();
    return filmes.rows;
}

async function createFilme(nome: string,plataforma: string ,gênero: string ,status: string) {
    //1st rule => Game cannot be created if the platform doesn't exist
    const plataformaExiste = await filmesRepository.listPlataforma(plataforma);
    if (!plataformaExiste.rowCount) throw errors.notFoundError("filme");
    const authorId: number = plataformaExiste.rows[0].id;

    //2nd rule => Only one game per platform can exist
    const filmeGeneroRelation = await filmesRepository.listFilmes(nome, gênero);
    if (filmeGeneroRelation.rowCount)
        throw errors.conflictError("genero");

}

async function deleteFilmeRelation(id: number) {
    const relationExists: ServerResponse = await filmesRepository.findRelation(id);
    if (!relationExists.rowCount) throw errors.notFoundError("Relation");

    await filmesRepository.deleteRelation(id);
}




const filmesService = { listFilmes,createFilme,deleteFilmeRelation }

export default filmesService