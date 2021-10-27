'use strict'

var mongoose = require('mongoose'); //cargo este modulo esta libreria q es la q se encarga de trabajar con los modelos
var Schema = mongoose.Schema; //vamos a usar el metodo schema

var InventarioSchema = Schema({
    producto: {type: Schema.ObjectId, ref:'producto', required: true},//Aca se esta vinculando el campo producto a la coleccion producto o sea al modelo producto..ref:'producto' qiere decir q hace referencia a esta coleccion
    admin: {type: Schema.ObjectId, ref:'admin', required: true},
    cantidad: {type: Number, required: true},
    proveedor: {type: String, required: true},
    createdAt: {type:Date, default:Date.now, require:true}//por defecto Date.now la fecha del momento
});

module.exports = mongoose.model('inventario', InventarioSchema); ////para poder importarlo con un reqired
//mongoose.model para utilizarlo como modelo va tener dos parametros ..Project el numero de mi entidad el segundo ProjectSchema
// projects  --> mongoose guarda los documents en la coleccion