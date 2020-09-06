var mongoose = require('mongoose')
var SecteurSchema = new mongoose.Schema({
    nom:String,
    updated_date: { type: Date, default: Date.now },
    edit: String,
    delete: String,
    plus: String,
    image:String,
});

module.exports = mongoose.model('Secteur', SecteurSchema);
