import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUsuarioController } from "../modules/users/useCases/getUsuarios/getUsuarioController";

export const userRoutes: Router = Router();

const createUserController = new CreateUserController();
const getUsuarioController = new GetUsuarioController();
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getUsuarioController.handle);
