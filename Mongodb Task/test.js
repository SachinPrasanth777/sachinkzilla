const {MongoClient}=require("mongodb");
require('dotenv').config();
const uri=process.env.MONGODB_URI;
const client= new MongoClient(uri);
async function testrun()
{
    try{
        const db=await client.connect();
        return db.db("database");
    }
    catch(error){
        console.log(error);
    }
}
async function testcloserun()
{
    try{
        client.close();
    }
    catch(error){
        console.log(error);
    }
}
module.exports={testrun,testcloserun};