import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserUseCaseDTO";
import { AppError } from "../../../../errors/appErrors";

export class CreateUserUseCase {
    async execute({name, email}: CreateUserDTO ): Promise<User>{
        const getUser = await prisma.user.findUnique({
            where:{
                email
            }
        });
        if(getUser){
            throw new AppError("Usuário já existe")
        }
        const user = await prisma.user.create({
            data: {
                email,
                name
            }
        })
        return user
    }
}