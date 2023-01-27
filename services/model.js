const mongoose = require('mongoose');

const usuario = mongoose.Schema({
    nome: { type: String },
    senha: { type: String},
    apikey: { type: String },
    defaultKey: { type: String },
    limit: { type: Number },
    dinheiro: { type: Number },
    premium: { type: String }
}, { versionKey: false });
module.exports.usuario = mongoose.model('api', usuario);