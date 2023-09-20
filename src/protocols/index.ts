export type Error = {
    type: string;
    message: string;
};

export type RequestLista = {
    id: number;
    nome: string;
    plataforma: string;
    gênero: string;
    status:string
};

export type filme = Omit<RequestLista, "id">;

export type status = {
    status: string;
}