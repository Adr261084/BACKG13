const mongoose = require("mongoose");

const PedidoSchema = mongoose.Schema(
    {
        nombreComprador: {type: String, required: true, trim: true},
        emailComprador: {type: String, required: true, trim: true},
        telefono: {type: Number, required: true, trim: true},
        direccionComprador: {type: String, required: true, trim: true},
        unidades: {type: Number, required: true, trim: true},
        totalPedido: {type: Number, required: true, trim: true},
        fechaPedido: {type: Date, default: Date.now()},
        idProducto: {type: mongoose.Schema.Types.ObjectId, ref: "Pedido"}
    });

// Definir el modelo
module.exports = mongoose.model("Pedido", PedidoSchema);