
//service

export class UserService {

    public config: any;
    public dependencies: any;
    public userRepository: any;

    constructor(config: any, dependecies: any) {
        this.config = config;
        this.dependencies = dependecies;
        this.userRepository = dependecies.repository
    }

   public async getUser(userModel:any) {

        console.log("In Service");
        return {"message":"Inservice"}
    }
}

export const createUserService = () => {

    return new UserService({},{});

}
