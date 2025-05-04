//controller
import { Request, Response } from 'express';
import { createUserService, UserService } from './user.service'

class UserController {
    public config: any;
    public dependencies: any;
    public userService: UserService;

    constructor(config: any, dependencies: any) {

        this.config = config;
        this.dependencies = dependencies;
        this.userService = dependencies.userservice;
    }

    async getUser(req: Request, res: Response) {

        //validate req parmater

        return await this.userService.getUser({});
    }
}

export const createUserController = () => {

    const dependecies = {
        userservice: createUserService()
    }

    return new UserController({}, dependecies);
}