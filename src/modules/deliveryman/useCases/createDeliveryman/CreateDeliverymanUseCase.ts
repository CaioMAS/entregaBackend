import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"


interface ICreateDeliveryman {
    username: string,
    password: string
}

export class CreateDeliveryUseCase {
    async execute ({password, username}: ICreateDeliveryman) {
        const deliverymanExit = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(deliverymanExit) {
            throw new Error("Deliveryman already exists")
        }

        const hashPassword = await hash (password, 10)

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return deliveryman
    }
}