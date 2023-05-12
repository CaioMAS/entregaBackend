import  request  from "supertest"
import { CreateClientUseCase } from "./CreateClientUseCase"


describe("Create Client", () => {

    it("It should be possible to create a new client", async () => {        
        const createClientUseCase = new CreateClientUseCase()

        const clientData = {
            username: "test name4",
            password: "123"
        }
        const client = await createClientUseCase.execute(clientData)

        console.log(client)

        expect(client).toHaveProperty("id")
        expect(client.username).toBe("test name4")

    })



})