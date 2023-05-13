import IDatabase from "../@types/database";

class Database implements IDatabase {
    create = async (args: Record<string, any>): Promise<void> => {
        await pris
    }

    async readAll(args: Record<string, any>): Promise<any[]> {
        const { table } = args
        await sqlize.readALl

        return []
    }

    async readOne(args: Record<string, any>): Promise<any[]> {
        const { table } = args
        /* prisma.clients */
        await prisma[table].findOne

        return []
    }
}


export { Database }