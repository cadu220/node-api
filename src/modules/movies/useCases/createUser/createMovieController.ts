import { Request, Response } from "express";
import { CreateMovieUseCase } from "./createMovieUseCase";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const {title, duration, release_date } = req.body;

    const createMovieUseCase = new CreateMovieUseCase();

    const result = await createMovieUseCase.execute({title, duration, release_date });

    const retorno = res.status(201).json(result);
    return;
  }
}
