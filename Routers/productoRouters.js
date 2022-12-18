const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const productoController = require("../Controllers/productoController")

router.get("/home", productoController.leerProductoHome);

router.get("/homeFiltro/:idCategoria", productoController.leerProductoHomeFiltro);

router.get("/id/:id", authMiddleware, productoController.leerProducto);

router.get("/producto/:idProdcuto", productoController.leerProductoUnico);

router.get("/:idCategoria", authMiddleware, productoController.leerProductoCategoria);

router.post("/", authMiddleware, productoController.crearProducto);

router.put("/:id", authMiddleware, productoController.actualizarProducto)

router.put("/pedido/:id", productoController.actualizarProductoCompra);

router.delete("/:id", authMiddleware, productoController.borrarProducto);

module.exports = router;