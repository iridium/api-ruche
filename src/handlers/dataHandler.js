const orderModel = require("@models/Bee_Data");
const createHttpError = require("http-errors");
const createError = require("http-errors");

module.exports = {

    getAll: (req, res, next) => { // récuperer toutes les commandes
        orderModel.find().lean().exec((err, doc) => {
            res.json(doc);
        });
    },

    getOne: (req, res, next) => {
        let orderId = req.params.orderId;

        orderModel.findById(orderId).populate("orders").lean().exec((err, doc) => {
            if (err) return next(new createError.NotFound());
            res.json(doc);
        });
    },

    post: (req, res, next) => {/*
        if(req.body.title === undefined || req.body.content === undefined) {
            return next(new createError.BadRequest("title or content missing"));
        } else {
            let newIssue = new issueModel({ // TODO : A sanetiser!
                author: req.user._id,
                title: req.body.title,
                content: req.body.content,
            });

            newIssue.save(err => {
                if (err) return next(new createHttpError.InternalServerError(err));
            });//TODO check if error ?
            res.status(201).redirect("/issues/"+ newIssue._id);
        }
        
    */},

    delete: (req, res, next) => {
        let orderId = req.params.orderId; //TODO sanitize

        orderId.findByIdAndDelete(orderId).exec((err, doc) => {
            if (err) return next(new createError.InternalServerError(err.message)); //TODO pas forcement 500 (404)

            res.status(204).end();
        });
    },

};