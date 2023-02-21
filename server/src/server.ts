import express, { RequestHandler, response, Response } from 'express'

const port = 3000;
const app = express();

app.get("/",(req,resp)=>{
    resp.status(200);
    resp.set("Content-Type","application/json");
    resp.send(JSON.stringify({message:"Hello, World!!!"}));
});

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
});