import { Filme } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";

export class GetFilmeByReleaseDateUseCase{
    async execute(): Promise<Filme[]> {
        const filmes = await prisma.filme.findMany({
            orderBy: {
                release_date: "desc"
            },
            include: {
                aluguel: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })
        return filmes;
    }
}