import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";



interface IPayload {
    sub: string
}


export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        })
    }

    // Bearer 95958484-984513213
    // [0] - Bearer
    // [1] - 95958484-984513213
    const [, token] = authHeader.split(" ") //separando onde tem espaço

    try {
        const { sub } = verify(token, "13474f3ed4aa1d5671be1267e2c57753") as IPayload

        request.id_client = sub

        return next()
    } catch (error) {
        return response.status(401).json({
            message: "Invalid token!"
        })
    }
}