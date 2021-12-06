import { route } from 'core-lib';
import { Request, Response } from 'express';


export =[
    route.POST("/user", (req: Request, res: Response) => {
        res.json(req.body)
    }),
    route.GET("/user", (req: Request, res: Response) => {
        res.json("Test")
    })
]