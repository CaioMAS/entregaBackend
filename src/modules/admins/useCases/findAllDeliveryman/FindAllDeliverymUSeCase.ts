import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliverymanUSeCase {
    async execute () {
        const deliverymans = await prisma.deliveryman.findMany({
            where: {}
        })

        return deliverymans
    }
}