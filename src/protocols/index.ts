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

export type FullRelation = {
    id: number;
    book_id: number;
    author_id: number;
    book: string;
    author: string;
  };

  export type ServerResponse = {
    rows: RequestLista[];
    rowCount: number;
};