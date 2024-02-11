
import { getDB } from "../../config/mongodb.config.js"
import ApplicationError from "../../error-Handler/ApplicationError.js"

export default class IssueRepository{
    constructor(){
        this.collection= 'issue'
    }


    async getIssuesOfProject(projectId){

        try{
            const db= getDB();

            const collection =db.collection(this.collection);

            const issues = await collection.find({projectId:projectId}).toArray();

            return issues;



        }catch(err){
            throw ApplicationError(400, 'Failed to get issues')
        }

    }


    async addIssue(data){
        try{

            const db=getDB();

            const collection =db.collection(this.collection);

            const issue = await collection.insertOne(data);

            
            return issue;

        }catch(err){
            throw ApplicationError(400, "Failed to add Issue")
        }
    }



    async filter(projectId, improvements, bugs, api, database, error){
        try{
            const db=getDB();
            const collection = db.collection(this.collection);

            const res=await collection.find(


                {$or:[    
                    {$and:[
                        {projectId:projectId},
                        {projectLabel:improvements}
                        
                    ]},
                    {$and:[
                        {projectId:projectId},
                        {projectLabel:bugs}
                    ]},
                    {$and:[
                        {projectId:projectId},
                        {projectLabel:api}
                    ]},
                    {$and:[
                        {projectId:projectId},
                        {projectLabel:database}
                    ]},
                    {$and:[
                        {projectId:projectId},
                        {projectLabel:error}
                    ]}
            
            ]}
                
            ).toArray();

            console.log(res);
            return res;

        }catch(err){
            console.log(err);
            throw new ApplicationError(400, "Failed to filter");
        }

    }



}
