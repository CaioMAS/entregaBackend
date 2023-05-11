import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authneticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllAvailabreController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndData/UpdateEndDateController";
import { FindAllClientsController } from "./modules/admins/useCases/findAllCliets/FindAllClientsController";
import { FindAllDeliverymanController } from "./modules/admins/useCases/findAllDeliveryman/FindAllDeliverymanController";
import { DeleteClientController } from "./modules/admins/useCases/deleteClient/DeleteClientController";


const routes = Router()

const createClienteController = new CreateClienteController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailabreController = new FindAllAvailabreController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClient = new FindAllDeliveriesController()
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()
const findAllClietsControler = new FindAllClientsController()
const findAllDeliverymController = new FindAllDeliverymanController()
const deleteClientController = new DeleteClientController()


// admin routes
routes.get("/clients/", findAllClietsControler.handle) // find clientes cadastrados
routes.get("/deliverymans/", findAllDeliverymController.handle) // find deliverymans
routes.delete("/client/:id", deleteClientController.handle) // delete client

//routes client
routes.post("/client/", createClienteController.handle)
routes.get("/client/deliveries/", ensureAuthenticateClient, findAllDeliveriesClient.handle) 

//routes authenticate
routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)

//routes deliveryman
routes.post("/deliveryman/", createDeliverymanController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle )
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle )

//router delivery
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailabreController.handle)
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

export {routes}