import express from 'express';
import { errorHandler, mountRoutes, Parser } from 'core-lib';
import morgan from 'morgan';
import { join } from 'path';



class App {

    //express app instance
    public app: express.Application

    constructor() {

        this.app = express();

    }

    async middleware() {
        //request logger
        this.app.use(morgan('combined'));
        //parse urlencoded
        this.app.use(Parser.urlencoded({ extended: false }))
        //parse application/json
        this.app.use(Parser.jsonParser({}))
        //dynamic mounting of routes
        mountRoutes(join(__dirname, 'components'), 'route', this.app, '/api/us');
        //error handler
        this.app.use(errorHandler);
    }
}

export default new App()









