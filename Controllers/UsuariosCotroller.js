//
const Usuario = require("../Models/usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);

    const {password, email} = req.body;
    try {
        //Revisar que sea unico correo
        let usuario = await Usuario.findOne({email});

        if (usuario) {
            return res.status(203).json({msg : "El usuario ya existe"});
        }
        //Crear nuevo usuario
        usuario = new Usuario(req.body);
        usuario.password = await bcryptjs.hash(password, 10)

        //Guardar usuario en BD
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    } catch (error) {
        return res.status(500);
    }
};

