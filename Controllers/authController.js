//authController.js
const Usuario = require("../Models/usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path:"variables.env"});

exports.autenticarUsuario = async (req, res) => {
    const {email, password } = req.body;
    try {

        //Revisar que correo este registrado
        let usuario = await Usuario.findOne({email});

        if (!usuario) {
            return res.status(404).json({msg: "El usuario no existe"});
        }

        //Validar password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passwordCorrecto) {
            return res.status(401).json({msg: "Password incorrecto"});
        }

        let payload = {
            usuario : {id : usuario.id},
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn:'30d',
            }
            ,(error, token) => {
                if (error) throw error;
                //Mensaje confirmacion
                return res.status(202).json({"token": token});
            }
        );
    } catch (error) {
        return res.status(501).json({"error": error});
    }
}

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await (Usuario.findById(req.usuario.id));
        res.json({usuario});
    }
    catch (e) {
        res.status(403).json({msg:"Hubo error autenticando"})
    }
}