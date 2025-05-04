//repository

import User from './user.model';
import * as mongoDB from "mongodb";
import { collections } from '../../services/db.service'

export class UserRepository {
    private userCollection: mongoDB.Collection;

    constructor() {
        this.userCollection = collections.users;
    }


    async find() {
        return await this.userCollection.find({}).toArray() as unknown as User[];
    }


}

export const createRepository=()=>{
       
    return new UserRepository();

}