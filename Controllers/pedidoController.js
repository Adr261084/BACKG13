const Pedido = require("../Models/pedido");
const mongoose = require("mongoose");

exports.leerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.find();
        res.status(200).json({pedido})
    } catch (e) {
        res.status(500).json({msg: e});
    }
}

exports.crearPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        pedido.save();

        res.status(201).json(pedido);
    } catch (e) {
        res.status(500).json({msg: e});
    }
}
