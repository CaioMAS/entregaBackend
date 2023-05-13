import { Router } from 'express'
import { CreateClientUseCase } from '../useCases/client'


const read = async (req: Request, res: Response) => {
    const test = req.headers

    DeliveryUseCase.delete()
}

const update = async (req: Request, res: Response) => {
    const test = req.headers

    useCase.update()
}

const create = async (req: Request, res: Response) => {
    const test = req.headers

    useCase.create()
}

export { read, update, create }