import { Request, Response } from "express";
import { GetUsuarioUseCase } from "./getUsuarioUseCase";

export class GetUsuarioController {
  async handle(req: Request, res: Response) {

    const getUsuarioDate = new GetUsuarioUseCase();

    const result = await getUsuarioDate.execute();

    const retorno = res.status(201).json(result);
    return;
  }
}
