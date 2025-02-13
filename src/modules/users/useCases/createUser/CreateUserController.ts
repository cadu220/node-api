import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ name, email });

    const retorno = res.status(201).json(result);
    return;
  }
}
