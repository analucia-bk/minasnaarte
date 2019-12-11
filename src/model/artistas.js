const mongoose = require('mongoose');

const ArtistasSchema = new mongoose.Schema({

    nomeArtista: { type: String },
    cnpj: { type: Number },
    categoria: { type: String },
    email: { type: String },
    telefone: { type: Number },
    cidade: { type: String },
    uf: { type: String },
    
    primeiravez: { type: Boolean }},

    { versionKey: false })

const Artistas = mongoose.model('Artistas', ArtistasSchema)

module.exports = Artistas