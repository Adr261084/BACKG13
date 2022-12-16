const Categoria = require("../Models/categoria");
exports.leerCategoriaHome = async (req, res) => {
    try {
        const categoria = await Categoria.find();
        res.status(200).json({categoria})
    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.leerCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.find({creador: req.usuario.id});
        res.status(200).json({categoria})
    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.leerCategoriaId = async (req, res) => {
    try {
        const {id} = req.params;
        const categoria = await Categoria.findById(id);
        if (!categoria) {
            return res.status(404).json({msg: "Categoria no encontrada"});
        }
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

exports.crearCategoria = async (req, res) => {
    try {
        const categoria = new Categoria(req.body);
        categoria.creador = req.usuario.id;
        categoria.save();
        res.status(201).json(categoria);

    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.actualizarCategoria = async (req, res) => {
    try {
        const {id} = req.params;
        const categoria = await Categoria.findById(id);
        if (!categoria) {
            return res.status(404).json({msg: "Categoria no encontrada"});
        }
        if (categoria.creador.toString() !== req.usuario.id.toString()) {
            return res.status(401).json({msg: "Accion no valida para este usuario"});
        }

        categoria.nombre = req.body.nombre || categoria.nombre;
        categoria.imagen = req.body.imagen || categoria.imagen;
        categoria.save();
        res.status(201).json(categoria);

    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.borrarCategoria = async (req, res) => {
    try {
        const {id} = req.params;
        const categoria = await Categoria.findById(id);
        if (!categoria) {
            return res.status(404).json({msg: "Categoria no encontrada"});
        }
        await Categoria.deleteOne({_Id: req.params.id});
        res.status(202).json({msg: "categoria eliminada"});

    } catch (e) {
        res.status(500).json({msg: e});
    }
}