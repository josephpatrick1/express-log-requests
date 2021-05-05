import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use((req: Request, res: Response) => {
    console.log({
        "method": req.method,
        "body": req.body,
        "url": req.url,
        "status": req.statusCode,
        "headers": req.headers
    });
    res.send("OK!");
})

const port = 4444;

app.listen(port, () => {
    console.log(`Servidor rodando da porta ${port}`);
});