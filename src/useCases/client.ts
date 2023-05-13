import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"
import { Database } from '../repositories/database'
const database = new Database()

interface IClienteClient {
    username: string,
    password: string
}

export class ClientUseCase {

    async get(id: string) {
        return database.readOne({ table: 'clients', id })
    }

    async delete() {

    }
    // async execute({ password, username }: IClienteClient) {
    //     // Validade se o usuário existe
    //     const clientExit = await prisma.clients.findFirst({
    //         where: {
    //             username: {
    //                 equals: username,
    //                 mode: "insensitive" //ignora se tem maiúcula ou minúscula
    //             }
    //         }
    //     })

    //     if (clientExit) {
    //         throw new Error("Client already exists")
    //     }

    //     //Criptografar a senha
    //     const hashPassword = await hash(password, 10)

    //     // Salvar o cliente se ele passar pela validação se existe um cliente ou não
    //     const client = await prisma.clients.create({
    //         data: {
    //             username,
    //             password: hashPassword
    //         }
    //     })

    //     return client
    // }
}