import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import filmesRouter from "./routers/filmes.router"
import errorHandler from "./middlewares/errorHandling.middleware";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(filmesRouter);
app.use(errorHandler);

const PORT: number = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server initiated on ${PORT}`));
