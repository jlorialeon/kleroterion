import { Router } from "express";
import {userController} from "../controller/user-controller"

export const routes = Router();

routes.use("/user",userController);
