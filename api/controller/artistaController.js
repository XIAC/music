// var Artista = require('../models/artista');
var models = require('../models');

function get(request, response) {
    models.Artista.findAll().then(artista => {
        response.json(artista);
    })
}
module.exports = {get }