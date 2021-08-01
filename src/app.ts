import * as express from "express";

import catsRouter from "./route/cats.route";
const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log("test middleware");
    next();
});

// json middleware
app.use(express.json());
app.use(catsRouter);

// 404 middleware
app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
    console.log(`Server Start`);
});
