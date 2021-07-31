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
app.use(express.json());
app.get("/cats", (req, res) => {
    try {
        const cats = app_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});
app.get("/cats/:id", (req, res) => {
    try {
        const params = req.params;
        const cat = app_model_1.Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat,
            },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});
app.post("/cats", (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        app_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});
app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, () => {
    console.log(`Server Start`);
});
//# sourceMappingURL=app.js.map