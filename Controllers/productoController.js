const Producto = require("../Models/producto");
const mongoose = require("mongoose");

exports.leerProductoHome = async (req, res) => {
    try {
        const producto = await Producto.find();
        res.status(200).json({producto})
    } catch (e) {
        res.status(500).json({msg: e});
    }
}

exports.leerProducto = async (req, res) => {
    const {id} = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({msg: "Producto no encontrado"});
        }
        res.status(200).json({producto})

    } catch (e) {
        res.status(500).json({msg: e});
    }
}

exports.leerProductoCategoria = async (req, res) => {

    const {idCategoria} = req.params;

    try {
        const producto = await Producto.find().where("categoriaId").equals(idCategoria);
        res.status(200).json({producto})
    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.crearProducto = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        producto.save();
        res.status(201).json(producto);
    } catch (e) {
        res.status(500).json({msg: e});
    }
}
exports.actualizarProducto = async (req, res) => {
    const {id} = req.params;
    console.log(req);
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({msg: "Producto no encontrado"});
        }

        producto.nombre = req.body.nombre || producto.nombre;
        producto.descripcion = req.body.descripcion || producto.descripcion;
        producto.stock = req.body.stock || producto.stock;
        producto.precio = req.body.precio || producto.precio;
        producto.imagen = req.body.imagen || producto.imagen;
        producto.categoriaId = req.body.categoriaId || producto.categoriaId;
        producto.save();
        res.status(201).json(producto);

    } catch (e) {
        console.log(e)
        res.status(500).json({msg: e});
    }
}
exports.borrarProducto = async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({msg: "Producto no encontrado"});
        }
        await Producto.deleteOne({_Id: req.params.id});
        res.status(202).json({msg: "producto eliminado"});
    } catch (e) {
        res.status(500).json({msg: e});
    }
}