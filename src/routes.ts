import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authneticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
<<<<<<< HEAD
import { FindAllAvailabreController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
=======
>>>>>>> 0109284ac96d6e05e35627c3fda2cdbdf16af4cb


const routes = Router()

const createClienteController = new CreateClienteController
const authenticateClientController = new AuthenticateClientController
const createDeliverymanController = new CreateDeliverymanController
const authenticateDeliverymanController = new AuthenticateDeliverymanController
const createDeliveryController = new CreateDeliveryController
<<<<<<< HEAD
const findAllAvailabreController = new FindAllAvailabreController

=======
>>>>>>> 0109284ac96d6e05e35627c3fda2cdbdf16af4cb

//routes client
routes.post("/client/", createClienteController.handle)

//routes authenticate
routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)

//routes deliveryman
routes.post("/deliveryman/", createDeliverymanController.handle)
<<<<<<< HEAD
=======

//router delivery
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle)
>>>>>>> 0109284ac96d6e05e35627c3fda2cdbdf16af4cb

//router delivery
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailabreController.handle)

export {routes}