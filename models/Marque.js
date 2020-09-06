var mongoose = require('mongoose'), Schema = mongoose.Schema;

var marqueSchema = new mongoose.Schema({
    MarqueName:String,
    catalogue:String,
    edit: String,
    delete: String,
    Secteur:{type: Schema.Types.ObjectId, ref:'Secteur'}
});

module.exports = mongoose.model('Marque', marqueSchema);
