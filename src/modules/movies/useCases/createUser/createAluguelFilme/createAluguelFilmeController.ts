import { Request, Response } from "express";
import { CreateAluguelFilmeUseCase } from "./createAluguelFilmeUseCase";

export class CreateAluguelController {
  async handle(req: Request, res: Response) {
    const {movieId, userId } = req.body;

    const createAluguelUseCase = new CreateAluguelFilmeUseCase();

    const result = await createAluguelUseCase.execute({movieId, userId });

    const retorno = res.status(201).send();
    return;
  }
}
