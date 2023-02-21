import { response, Router } from "express";

export const userController = Router();

userController.get("/",(req,resp)=>{

    console.log("Test");
    resp.json({messa:"Hello"});

});
