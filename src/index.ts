import app from "./app";

const server = app.listen(3000, () => {
    console.log("Server is Listining on 3000")
});


//gracefully shutdown node js
process.on("unhandledRejection", (e) => {
    console.log("Shutdown everything",e);
    server.close()
})