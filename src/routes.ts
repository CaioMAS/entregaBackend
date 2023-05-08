import { Router } from "express";
import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router()

const createClienteController = new CreateClienteController

routes.post("/client/", createClienteController.handle)

export {routes}
