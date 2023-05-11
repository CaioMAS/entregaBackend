import { Request, Response } from "express";
import { FindAllDeliverymanUSeCase } from "./FindAllDeliverymUSeCase";



export class FindAllDeliverymanController {
    async handle(request: Request, response: Response) {
        const findAllDeliverymUseCase = new FindAllDeliverymanUSeCase()

        const deliverymans = await findAllDeliverymUseCase.execute()

        return response.json(deliverymans)
    }
}