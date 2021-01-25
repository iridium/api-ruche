const beeModel = require("@models/Bee_Data");
const createHttpError = require("http-errors");
const createError = require("http-errors");

module.exports = {

    getAll: (req, res, next) => { // récuperer toutes les commandes
        beeModel.find().lean().exec((err, doc) => {
            res.json(doc);
        });
    },

    getOne: (req, res, next) => {
        let dataId = req.params.dataId;

        beeModel.findById(dataId).lean().exec((err, doc) => {
            if (err) return next(new createError.NotFound());
            res.json(doc);
        });
    },

    post: (req, res, next) => {
        if(req.body.weight === undefined || req.body.temp === undefined || req.body.humidity === undefined) {
            return next(new createError.BadRequest("Missing data"));
        } else {
            let newData = new beeModel({ // TODO : A sanetiser!
                poids: req.body.weight,
                temp: req.body.temp,
                humidity: req.body.humidity,
            });

            newData.save(err => {
                if (err) return next(new createHttpError.InternalServerError(err));
            });//TODO check if error ?
            res.status(201).send();
        }
        
    },

    delete: (req, res, next) => {
        let dataId = req.params.dataId; //TODO sanitize

        beeModel.findByIdAndDelete(dataId).exec((err, doc) => {
            if (err) return next(new createError.InternalServerError(err.message)); //TODO pas forcement 500 (404)

            res.status(204).end();
        });
    },

};