"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cats_route_1 = require("./route/cats.route");
const app = express();
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log("test middleware");
    next();
});
app.use(express.json());
app.use(cats_route_1.default);
app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, () => {
    console.log(`Server Start`);
});
//# sourceMappingURL=app.js.map