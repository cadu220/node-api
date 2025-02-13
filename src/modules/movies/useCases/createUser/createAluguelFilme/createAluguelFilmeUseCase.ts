import { AppError } from "../../../../../errors/appErrors";
import { prisma } from "../../../../../prisma/client";
import { createAluguelFilmeDTO } from "../../../dtos/createAluguelFilmeDTO";

export class CreateAluguelFilmeUseCase {
  async execute({ movieId, userId }: createAluguelFilmeDTO): Promise<void> {
    const getFilme = await prisma.filme.findUnique({
      where: {
        id: movieId,
      },
    });
    if(!getFilme){
        throw new AppError("Não existe esse filme para aluguel!");
    }
    const getFilmeAlugado = await prisma.aluguel.findFirst({
        where: {
          movieId
        },
      });
      if(getFilmeAlugado){
        throw new AppError("Esse filme está alugado!");

      }
      const getUser = await prisma.user.findUnique({
        where: {
          id: userId
        },
      });  
      if (!getUser){
        throw new AppError("Usuário não existe!");
      }
      await prisma.aluguel.create({
        data: {movieId, userId}
      })
  }
}
