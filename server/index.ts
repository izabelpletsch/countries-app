import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { indexRouter, countriesRoutes } from "./interface/routes/index.routes";
import { errorHandler } from "./interface/middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.API_SERVER_PORT;

app.use(cors())
app.use(express.json());
app.use('/', indexRouter);
app.use('/', countriesRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});