const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const ProductoController = require("../Controllers/ProductoController")

router.get("/", authMiddleware, ProductoController.leerProducto);

router.post("/", authMiddleware, ProductoController.crearProducto);

router.put("/:id", authMiddleware, ProductoController.actualizarProducto);

router.delete("/:id", authMiddleware, ProductoController.borrarProducto);

module.exports = router;