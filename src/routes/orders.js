const Router = require("express").Router;
const ordersHandler = require("@handlers/orders");
//const commentsHandler = require("@handlers/comments");
//const authenticated = require("@middlewares/authenticated");
//const authorized = require("@middlewares/authorized");

const orders = Router();

orders.route("/")
    .get(                            ordersHandler.getAll)
    .post(                           ordersHandler.post);

orders.route("/:orderId")
    .get(                            ordersHandler.getOne)
    .delete(                         ordersHandler.delete);

//    orders.get("/:issueId/comments",       commentsHandler.getAllbyIssue);

//orders.get("/:issueId/comments",       commentsHandler.getAllbyIssue);

module.exports = {prefix: "orders", router: orders};