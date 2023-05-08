import { prisma } from "../../../database/prismaClient"



interface IAuthenticateClient {
    username: string,
    password: string
}

export class AuthenticateClientUseCase {
    async execute({username, password} : IAuthenticateClient) {
        // Receber username, password

        // Verificar se usaname cadastrato
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client)
        // Verificar se senha corresponde ao username

        // Gerar o token
    }
}