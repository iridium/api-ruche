const Router = require("express").Router;
const dataHandler = require("@handlers/dataHandler");
//const commentsHandler = require("@handlers/comments");
//const authenticated = require("@middlewares/authenticated");
//const authorized = require("@middlewares/authorized");

const orders = Router();

orders.route("/")
    .get(                            dataHandler.getAll)
    .post(                           dataHandler.post);

orders.route("/:orderId")
    .get(                            dataHandler.getOne)
    .delete(                         dataHandler.delete);

//    orders.get("/:issueId/comments",       commentsHandler.getAllbyIssue);

//orders.get("/:issueId/comments",       commentsHandler.getAllbyIssue);

module.exports = {prefix: "data", router: data};