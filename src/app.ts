import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use((req: Request, res: Response) => {
    const request = {
        "method": req.method,
        "body": req.body,
        "url": req.url,
        "hostname": req.hostname,
        "xhr": req.xhr,
        "remoteAddress": req.ip,
        "headers": req.headers
    };
    console.log(request);
    res.send(request);
})

const port = 4444;

app.listen(port, () => {
    console.log(`Servidor rodando da porta ${port}`);
});