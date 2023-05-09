import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authneticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";


const routes = Router()

const createClienteController = new CreateClienteController
const authenticateClientController = new AuthenticateClientController
const createDeliverymanController = new CreateDeliverymanController
const authenticateDeliverymanController = new AuthenticateDeliverymanController
const createDeliveryController = new CreateDeliveryController

//routes client
routes.post("/client/", createClienteController.handle)

//routes authenticate
routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)

//routes deliveryman
routes.post("/deliveryman/", createDeliverymanController.handle)

//router delivery
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle)

export {routes}
