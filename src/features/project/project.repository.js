//  import required all file here

// importing mongodb function here
import { getDB } from "../../config/mongodb.config.js"

import ApplicationError from "../../error-Handler/ApplicationError.js";




export default class ProjectRepository{
    constructor(){
        this.collection="project"
    }

    async addingNewProject(data){

        try{
        
            const db= getDB();
            const collection =db.collection(this.collection);
            const project = await collection.insertOne(data);
            
            return project;


        }catch(err){
            console.log(err);
            throw new ApplicationError(400, "Failed to add Project")
        }

    }


    async  getProjectsRepository (){
        try{
            const db= getDB();
            const collection = db.collection(this.collection);

            const projects = await collection.find().toArray();
            
            return projects;

        }catch(err){
            console.log(err);
            throw new ApplicationError(400, "Failed to get Projects");
        }
    }


    async search(data){
        try{
            
            const db= getDB();

            const collection= db.collection(this.collection);

            const products=await collection.find({$or:[{author:data},{projectName:data}]}).toArray()

            return products;

        }catch(err){
            console.log(err);

            throw new ApplicationError(400, "Failed to search Projects");
        }
    }







}