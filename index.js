//Servidor, frameworks y librerias
const express = require("express");
const dotenv = require("dotenv").config();
//const nodemailer = require("nodemailer");
const cors = require("cors");
require("./database/conexion");

const app = express();
const PORT = process.env.PORT || 8080;

const contactoController = require("./controllers/contactoController");
const suscribeteController = require("./controllers/suscribeteController");
const tiendaController = require("./controllers/tiendaController");

//Configuración de Middelwares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
    /* origin: "https://localhost:9000" */
    })
);

app.get("/tienda", async (req, res) => {
    res.json({
    planta: await tiendaController.findAll(),
    });
});

app.post("/tienda", async (req, res) => {
    console.log(req.body);
    await tiendaController.create(req.body);
    res.json("Planta Añadida a la Tienda");
    console.log("== Planta Añadida ==");
});

app.get("/contacto", async (req, res) => {
    res.json({
    contacto: await contactoController.findAll(),
    });
});

app.post("/contacto", async (req, res) => {
    console.log(req.body);
    await contactoController.create(req.body);
    res.json("Usuario Contactado");
    console.log("== Usuario Contactado ==");
});

app.get("/suscribete", async (req, res) => {
    res.json({
    persona: await suscribeteController.findAll(),
    });
});

app.post("/suscribete", async (req, res) => {
    console.log(req.body);
    await suscribeteController.create(req.body);
    res.json("Usuario Suscrito");
    console.log("== Usuario Suscrito ==");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
});

