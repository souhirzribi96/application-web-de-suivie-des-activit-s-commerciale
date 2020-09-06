var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Secteur = require('../models/Secteur.js');
var multer = require('multer');



/* GET ALL Secteurs */
router.get('/', function(req, res, next) {
    Secteur.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Secteur BY ID */
router.get('/:id', function(req, res, next) {
    Secteur.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/*...............................................................................*/
router.post('/', function(req, res, next) {
        const sect = new Secteur({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.nom,

    });
    sect.save().then(result => {
        console.log( result);
        res.status(201).json({
                message: "created succsfully && Image uploaded!",
                sect: {
                    nom:result.nom,
                    request:{
                        type:"POST",
                        url:'http://localhost:4200/secteur/'+ result._id
                    }
                }
            });
        })        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
/*...............................................................................*/
/* UPDATE Secteur */
router.put('/:id', function(req, res, next) {
    Secteur.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Secteur */
router.delete('/:id', function(req, res, next) {
    Secteur.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
