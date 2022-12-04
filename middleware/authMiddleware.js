//authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    //leer el token a validar desde header
    const token = req.header("x-auth-token");
    //console.log(token);
    //Revisar token
    if (!token) {
        return res.status(400).json({msg: "no hay token"});
    }
    //Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next();
        //return res.status(400).json({msg: cifrado.usuario});
    } catch (e) {
        res.status(401).json({msg: "Token invalido"})
    }
}
