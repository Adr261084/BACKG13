const express = require("express");
const conectarDB = require("./config/db.js");
const UsuarioRouters = require("./Routers/UsuarioRouters");
const authRouters = require("./Routers/authRouters");
const categoriaRouters = require("./Routers/categoriaRouters");
const productoRouters = require("./Routers/productoRouters");
const cors = require("cors");
//Conectar a la base de datos
conectarDB();
const app = express();
//Habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({
        extended: true
    }
));

app.use("/api/usuarios", UsuarioRouters);
app.use("/api/auth", authRouters);
app.use("/api/categoria", categoriaRouters);
app.use("/api/producto", productoRouters);

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000")
});


//adrian1084
//33wW7I9wItWMh9te
//mongodb+srv://adrian1084:33wW7I9wItWMh9te@cluster0.t9afyv6.mongodb.net/?retryWrites=true&w=majority