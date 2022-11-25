const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},//string max es caracteres
    nombre:{type: String, required: true, max:60},
    categoria:{type: String, required: true, max:400},
    descripcion:{type: String, required: true, max:400},
    precio:{type: Number, required: true, max:250},
});

module.exports = mongoose.model("productos", ProductosSchema); 