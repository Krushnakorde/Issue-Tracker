

// configuration related to mongodb;

import {MongoClient} from "mongodb";

const url = process.env.DB_URL;

let client ;

export const ConnectToMongoDB =()=>{

    try{

        MongoClient.connect(process.env.DB_URL).then(clientInstance =>{
            client= clientInstance;
        })

        console.log("Mongodb connected")

     } catch(err){
        console.log(err)
    }


}



export const getDB = () => {
    return client.db();
}