import * as express from "express";

import { Cat, CatType } from "./app.model";

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log("test middleware");
    next();
});

// json middleware
app.use(express.json());

// READ 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
    try {
        const cats = Cat;
        // throw new Error("db Connet Error")
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});

// READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
    try {
        // req.params 에 id가 담겨있음.
        const params = req.params;
        const cat = Cat.find((cat) => {
            // id 의 값은 params 가 갖고있음.
            return cat.id === params.id;
        });
        // throw new Error("db Connet Error")
        res.status(200).send({
            success: true,
            data: {
                cat,
            },
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
});

// CREATE 새로운 고양이 추가 api
app.post("/cats", (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
    /*   
    {
            "name": "yellow",
            "age": 3,
            "species": "sharm",
            "isCute": true,
            "friends": []
    }

    */
});

// 404 middleware
app.use((req, res, next) => {
    console.log("this is test middleware");
    res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
    console.log(`Server Start`);
});
