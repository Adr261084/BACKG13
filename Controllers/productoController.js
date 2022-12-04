const Producto = require("../Models/producto");

exports.leerProducto = async (req, res) => {
    try {
        const producto = await Producto.find({creador:req.usuario.id});
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
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if(!producto){
            return res.status(404).json({msg:"Producto no encontrado"});
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
        res.status(500).json({msg: e});
    }
}
exports.borrarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if(!producto){
            return res.status(404).json({msg:"Producto no encontrado"});
        }
        await Producto.deleteOne({_Id: req.params.id});
        res.status(202).json({msg:"producto eliminado"});
    } catch (e) {
        res.status(500).json({msg: e});
    }
}