import { RequestLista } from "protocols";
import db  from "../database/database.connection"

async function listFilmes() {

    const result = await db.query<RequestLista>(`SELECT * FROM filmes;`);

    const { rows, rowCount } = result;
    return { rows, rowCount };
}

async function createFilme(nome: string,plataforma: string,gênero: string,status: string){
    await db.query(`INSERT INTO filmes(nome,plataforma,gênero,status) VALUES ($1,$2,$3,$4)`, [nome,plataforma,gênero,status]);
}

async function updateStatus(id:number,status:string){
    await db.query(`UPDATE filmes SET status=$2 WHERE id=$1;`,[id,status]);
}

async function deleteFilme(id:number){
    await db.query(`DELETE FROM filmes WHERE id=$1`, [id]);
}

async function findFilmeById(id:number){
    const result = await db.query(`SELECT nome FROM filmes WHERE id=$1;`, [id]);
    const { rows, rowCount } = result;
    return { rows, rowCount };
}

const filmesRepository = { listFilmes,createFilme,updateStatus,deleteFilme,findFilmeById}

export default filmesRepository
