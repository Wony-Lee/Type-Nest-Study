"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app_model_1 = require("./app.model");
const app = express();
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log("test middleware");
    next();
});
app.get("/", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/blue", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ cats: app_model_1.Cat[0] });
});
app.get("/cats/som", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ som: app_model_1.Cat[1] });
});
app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, () => {
    console.log(`Server Start`);
});
//# sourceMappingURL=app.js.map