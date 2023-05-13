export default interface IDatabase {
    create(args: Record<string, any>): Promise<void>
    read(args: Record<string, any>): Promise<any[]>

}