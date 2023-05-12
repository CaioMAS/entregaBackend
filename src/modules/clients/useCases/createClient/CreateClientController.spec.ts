import { app } from "../../../../app";
import  request  from "supertest";

describe("Create client Controller", () => {
    it("It should be possible to create a new client", async() => {
        const response = await request(app)
        .post("/client")
        .send({
            username: "testintegration5npm prisma",
            password: "123456789"
        })

        console.log(response.status)
    })
})