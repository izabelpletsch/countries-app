import express from "express";
import { countriesRoutes } from "./countries.routes";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the countries app!");
});

export {router as indexRouter, countriesRoutes};