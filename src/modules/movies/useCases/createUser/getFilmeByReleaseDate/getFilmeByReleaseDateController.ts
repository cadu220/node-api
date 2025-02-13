import { Request, Response } from "express";
import { GetFilmeByReleaseDateUseCase } from "./getFilmeByReleaseDateUseCase";

export class GetFilmeByReleaseDateController {
  async handle(req: Request, res: Response) {

    const getFilmeByReleaseDate = new GetFilmeByReleaseDateUseCase();

    const result = await getFilmeByReleaseDate.execute();

    const retorno = res.status(201).json(result);
    return;
  }
}
