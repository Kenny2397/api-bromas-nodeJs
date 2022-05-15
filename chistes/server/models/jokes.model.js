const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "El campo de configuracion de la broma es requerido."],
        minlength: [5, "La configuracion de la broma debe tener almenos 5 caracteres."]
    },

    punchline:{
        type: String,
        required: [true, "El campo de desenlace de la broma es requerido."],
        minlength: [5, "El desenlace de la broma debe tener almenos 5 caracteres."]
    }
},{timestamps: true, versionKey: false});

const Joke = mongoose.model("broma",JokeSchema);

module.exports = Joke;