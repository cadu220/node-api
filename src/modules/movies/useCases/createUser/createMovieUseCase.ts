import { Filme, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/appErrors";
import { CreateMovieDTO } from "../../dtos/createMovieDTO";

export class CreateMovieUseCase {
    async execute({title, duration, release_date}: CreateMovieDTO ): Promise<Filme>{
        const getFilme = await prisma.filme.findUnique({
            where:{
                title
            }
        });
        if(getFilme){
            throw new AppError("Filme já existe")
        }
        const filme = await prisma.filme.create({
            data: {
                title, duration, release_date
            }
        })
        return filme
    }
}