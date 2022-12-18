const express = require("express");
const router = express.Router();
const pedidoController = require("../Controllers/pedidoController")
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, pedidoController.leerPedido);

router.post("/", pedidoController.crearPedido);

module.exports = router;