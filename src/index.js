require("module-alias/register");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

dotenv.config();

let mongodb_url = "mongodb://localhost";
let serv_port = 3000;

mongoose.connect(mongodb_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const rootRouter = new express.Router();

fs.readdirSync("./src/routes").forEach(filename => {
    let file = require("@routes/" + filename);
    rootRouter.use("/" + file.prefix, file.router);
});

//app.use(`/${apiVersion}`, rootRouter); //version prefix
app.use("/", rootRouter);

app.use((err, req, res, next) => {
    if (res.headersSent) return next(err); //defaults to express error handler

    let error = {
        status: err.status,
        message: err.message
    };

    res.status(err.status || 500).json(error);
});

app.use((req, res, next) => {
    res.status(404).end();
});

app.listen(serv_port);