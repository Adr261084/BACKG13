const express = require("express");
const router = express.Router();
const usurioController = require("../Controllers/UsuariosCotroller");

router.post(
    "/",
    usurioController.crearUsuario
);

module.exports = router;