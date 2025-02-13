import { Filme, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUsuarioUseCase{
    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany({
            orderBy: {
                id: "desc"
            },
            include: {
                aluguel: {
                    select : {
                        movie: {
                            select :{
                                title: true,
                                duration: true
                            }
                        }
                    }
                }
            }
        })
        return users;
    }
}