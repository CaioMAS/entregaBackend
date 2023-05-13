import { Router } from 'express'
import { ClientUseCase, CreateClientUseCase } from '../useCases/client'

const getClient = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.query

    const useCase = new ClientUseCase()
    return useCase.get(id)
}

const createClient = async (req: Request<{ id: string, test: boolean }>, res: Response) => {
    const { id } = req.query

    const useCase = new ClientUseCase()
    return useCase.create(id)
}

export { getClient, createClient }