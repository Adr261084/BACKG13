//authRouters.js
const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/",
    authController.autenticarUsuario
);

router.get("/", authMiddleware, authController.usuarioAutenticado);
module.exports = router;