const Router = require("express").Router;
const dataHandler = require("@handlers/dataHandler");

const data = Router();

data.route("/")
    .get(                            dataHandler.getAll)
    .post(                           dataHandler.post);

data.route("/:dataId")
    .get(                            dataHandler.getOne)
    .delete(                         dataHandler.delete);

module.exports = {prefix: "data", router: data};