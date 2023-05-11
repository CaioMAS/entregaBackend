import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request // é requerido atravez do token
        const { id: id_delivery } = request.params //id da entrega
        
        
        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()
        const delivery = await updateDeliverymanUseCase.execute({
            id_deliveryman,
            id_delivery
        })

        return response.json(delivery)
    }
}