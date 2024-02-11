// importing other files here;
import server from "./index.js"
import { ConnectToMongoDB } from "./src/config/mongodb.config.js";


const port =8000

server.listen(port, ()=>{
    console.log(`server is ported on ${port}`);

    ConnectToMongoDB();
})