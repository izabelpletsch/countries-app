import express from "express";

export function errorHandler(
    // eslint-disable-next-line
    err: any,
    req: express.Request,
    res: express.Response
) {
    console.error(err.stack);
    res.status(err.stack.status).send("Internal error.");
}
