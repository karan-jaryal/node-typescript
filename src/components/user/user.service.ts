import {createRepository,UserRepository} from './user.repository'
//service

export class UserService {

    public config: any;
    public dependencies: any;
    public repository: UserRepository;

    constructor(config: any, dependecies: any) {
        this.config = config;
        this.dependencies = dependecies;
        this.repository = dependecies.repository
    }

   public async getUser(userModel:any) {
       const records = await this.repository.find()
        return records;
    }
}

export const createUserService = () => {
const dependecies ={
    repository : createRepository()
}
    return new UserService({},dependecies);

}
