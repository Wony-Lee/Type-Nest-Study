import * as express from "express";

import { Cat, CatType } from "./app.model";

const app: express.Express = express();

// router middleware
app.use((req, res, next) => {
    // req = request, res = response, next = next
    console.log(req.rawHeaders[1]);
    console.log("test middleware");
    next();
});

app.get("/", (req: express.Request, res: express.Response) => {
    console.log(req.rawHeaders[1]);
    res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ cats: Cat[0] });
});

app.get("/cats/som", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
    console.log(`Server Start`);
});
