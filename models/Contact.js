var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
nom:{type: String} ,
prenom: String,
email: String,
telBureau: String,
telMobile: String,
adresse: String,
updated_date: { type: Date, default: Date.now },
    edit: String,
    delete: String,
});

module.exports = mongoose.model('Contact', ContactSchema);
