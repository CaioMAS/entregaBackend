import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";



export class DeleteClientController {
    async handle(request: Request, response: Response) {
        const {id: id_client} = request.params

        const deleteClientUseCase = new DeleteClientUseCase() 
        const client = await deleteClientUseCase.execute(id_client)

        return response.json(client)
    }
}