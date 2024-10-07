import { route } from 'core-lib';
import { Request, Response } from 'express';
import {createUserController} from '../user.controller';

class UserRoutes {

    public config: any;
    public dependencies: any;

    constructor(config:any,dependecies:any){
        this.config = config;
        this.dependencies = dependecies;
    }

    async get(req: Request, res: Response){
        console.log(this.dependencies.userController)
       return await this.dependencies.userController.getUser();
    }
}


const createUserRoute = ()=>{

    const dependecies ={
        userController : createUserController()
    }
    return new UserRoutes({},dependecies);
}

export =[
    route.POST("/user", (req: Request, res: Response) => {
        res.json(req.body)
    }),
    route.GET("/user", async(req: Request, res: Response) => {
        const response = await createUserRoute().get(req,res);
        console.log(response)
        res.json(response);
    })
]