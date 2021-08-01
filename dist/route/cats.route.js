"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cats_model_1 = require("./cats.model");
const express_1 = require("express");
const router = express_1.Router();
router.get("/cats", (req, res) => {
    try {
        const cats = cats_model_1.Cat;
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
router.get("/cats/:id", (req, res) => {
    try {
        const params = req.params;
        const cat = cats_model_1.Cat.find((cat) => {
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
router.post("/cats", (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        cats_model_1.Cat.push(data);
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
router.put("/cats/:id", (req, res) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        cats_model_1.Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result,
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
router.patch("/cats/:id", (req, res) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        cats_model_1.Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = Object.assign(Object.assign({}, cat), body);
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result,
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
router.delete("/cats/:id", (req, res) => {
    try {
        const params = req.params;
        const newCat = cats_model_1.Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data: newCat,
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map