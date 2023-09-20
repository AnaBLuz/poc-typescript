import { RequestLista} from "../protocols/index";
import filmesRepository from "../repositories/filmes.repository"
import * as errors from "../errors/errorrs"



async function listFilmes() {   
    const filmes = await filmesRepository.listFilmes();
    return filmes.rows;
}

async function createFilme(nome: string,plataforma: string ,gênero: string ,status: string) {
    await filmesRepository.createFilme(nome,plataforma,gênero,status);

}

async function updateStatus(id:number,status:string){
    await filmesRepository.updateStatus(id,status);
}

async function deleteFilme(id: number){
    const filmeExiste = await filmesRepository.findFilmeById(id);
    if(!filmeExiste.rowCount) throw errors.notFoundError("Filme");
    await filmesRepository.deleteFilme(id);
}


const filmesService = { listFilmes, createFilme,updateStatus,deleteFilme}

export default filmesService