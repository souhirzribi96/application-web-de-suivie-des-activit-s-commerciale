var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Marque = require('../models/Marque.js');
var Secteur = require('../models/Secteur.js');

/*...................................................................*/
router.get("/",(req, res, next) => {
    Marque.find()
        .select("Secteur MarqueName _id catalogue")
        .populate('Secteur','nom')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                Sects: docs.map(doc => {
                    return {
                        _id: doc._id,
                        MarqueName: doc.MarqueName,
                        Secteur: doc.Secteur,
                        catalogue: doc.catalogue,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/marque/" + doc._id
                        }
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });

});
/*...................................................................*/
/* GET SINGLE Marques BY ID */
router.get("/:Id", (req, res, next) => {
    Marque.findById(req.params.Id)
        .populate('Secteur','nom')
        .exec()
        .then(marq => {
            if (!marq) {
                return res.status(404).json({
                    message: "marq not found"
                });
            }
            res.status(200).json({
                marque: marq,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/marque"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

/*FIND ALL MARQ OF A SECTEUR */
router.get('/secteur/:secteurId',function(req, res, next){
    Marque.find({Secteur: req.params.secteurId})
        .exec(function (err, secteurs) {
            res.send(secteurs);
            console.log(secteurs);
        });
})
/* SAVE Marques */
router.post('/', function(req, res, next) {
        Marque.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post,);
  });
});
/*......................................................................*/
/*router.post("/", (req, res, next) => {
    Secteur.findById(req.body.secteurId)
        .then(product => {

            const marq = new Marque({
                _id: mongoose.Types.ObjectId(),
                MarqueName: req.body.MarqueName,
                Secteur: req.body.sectId
            });
            return marq.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "marque stored",
                createdmarq: {
                    _id: result._id,
                    Secteur: result.Secteur,
                    MarqueName: result.MarqueName
                },
                request: {
                    type: "GET",
                    url: "http://localhost:3000/orders/" + result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});*/

/*......................................................................*/
/* UPDATE Marques */
router.put('/:id', function(req, res, next) {
    Marque.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE marques */
router.delete('/:id', function(req, res, next) {
    Marque.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
