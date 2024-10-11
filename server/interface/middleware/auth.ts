import { verify } from "jsonwebtoken";
import express from "express";

export function authenticate(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send("Token not sent in the request.");

    verify(token, process.env.API_SECRET as string, (err) => {
        if (err) return res.status(401).send("Invalid token.");
        next();
    });
}
