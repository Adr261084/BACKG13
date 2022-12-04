const express = require("express");
const conectarDB = require("./config/db.js");
const usuarioRouters = require("./Routers/usuarioRouters");
const authRouters = require("./Routers/authRouters");
const categoriaRouters = require("./Routers/categoriaRouters");
const productoRouters = require("./Routers/productoRouters");
const cors = require("cors");

await (conectarDB()); //Conectar a la base de datos
const app = express();

app.use(cors()); //Habilitar cors
app.use(express.json({
    extended: true
}));  //Habilitar express.json

app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);
app.use("/api/categoria", categoriaRouters);
app.use("/api/producto", productoRouters);

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000")
});
