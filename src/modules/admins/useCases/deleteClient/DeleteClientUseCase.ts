import { prisma } from "../../../../database/prismaClient";

export class DeleteClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client,
      },
    })

    for (const delivery of deliveries) {
      await prisma.deliveries.delete({
        where: {
          id: delivery.id,
        },
      })
    }

    const client = await prisma.clients.delete({
      where: {
        id: id_client,
      },
    })

    return (`Client ${client.username} deleted`)
  }
}