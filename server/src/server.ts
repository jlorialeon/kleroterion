import express, { RequestHandler, response, Response, Router } from 'express'
import {routes} from "./routes/routes"

const port = 3000;
const app = express();

const router = app.use("",routes);

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })

app.get("/",(req,resp)=>{
    resp.status(200);
    resp.setHeader("Content-Type","application/json");
    resp.json({message:"Hello, World!"});
});

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
});