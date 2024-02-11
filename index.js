// import all modules here
import express from "express";
import "./dotenv.js"

import path from 'path'

import layouts from "express-ejs-layouts";

import ejs from "ejs";

import bodyParser from "body-parser";

// import routes here;

import projectRouter from "./src/features/project/project.routes.js"
import ApplicationError from "./src/error-Handler/ApplicationError.js";
import issueRouter from "./src/features/issue/issue.routes.js";


const server = express();

// for reading encoded data
server.use(bodyParser.json());
server.use(express.urlencoded({extended:true}));

// public folder 
server.use(express.static("public"));

// ejs setting
server.set("view engine", 'ejs');
server.set("views", path.join(path.resolve(), "src","features", "view"));


server.get("/", (req, res, next)=>{
    res.render("projectView/home");
});

server.use(layouts);


server.use("/api/projects", projectRouter)


server.use("/api/issues", issueRouter)


// error handling 
server.use((err, req, res, next)=>{

    console.log(err);

    if(err instanceof ApplicationError){
        
       return  res.status(err.code).send(err.message);
    }

    res.status(500).send("something went wrong with server, try after some time");

})







export default server;