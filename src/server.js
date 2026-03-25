// const express = require("express");
import express, { json } from "express";

import userRoutes from "./view/usersRoutes.js";

const Port = 3500;
const app = express();

app.use(json());

app.use(userRoutes);

app.get("/test", (req, res) => {
    res.status(200).json({ "message": "servidor rodando na porta 3500" })
});


app.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port} \n CTRL+C para o servidor`);
})
