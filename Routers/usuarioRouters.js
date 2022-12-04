const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/usuarioCotroller");

router.post(
    "/",
    usuarioController.crearUsuario
);

module.exports = router;