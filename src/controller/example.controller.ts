import { Request, Response } from "express"

export const Example = (req: Request, res: Response) => {
    res.send('Hello !')
}