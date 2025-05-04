import Express from "./app";
import { connectToDatabase } from './services/db.service';
let server: any = undefined;

connectToDatabase().then(() => { 
    console.log("Db connected")
})
  .then(() => {
        Express.middleware()
    })
    .then(() => {
        server = Express.app.listen(3000, () => {
            console.log("Server is Listining on 3000")
        });
    })




//gracefully shutdown node js
process.on("unhandledRejection", (e) => {
    console.log("Shutdown everything", e);
    if (server) {
        server.close()
    }

});