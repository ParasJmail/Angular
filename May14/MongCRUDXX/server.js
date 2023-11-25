const express = require('express');

const eobj = express();

/////////////////////////////////////////////////////////////////////////////////////////
//For MongoDb
const {MongoClient} = require("mongodb");
const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL)
//////////////////////////////////////////////////////////////////////////////////////////

port = 5100;

function StartServer()
{
    console.log("Paras Server started successfully...")
}


eobj.listen(port,StartServer);

eobj.get('/',function(req,res)
{
    res.send("Paras Server is live now...")
});

async function getConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches")
    

}

async function readData()
{
    let data = await getConnection();
    data = await data.find({}).toArray();
    console.log("Data from Marvellous Database is : ");
    console.log(data);
}

async function deleteData()
{
    let data = await getConnection();
    let result = await data.deleteOne({"Batch":"LB"})
    if(result.acknowledged)
    {
        console.log("Delete Operation is performed sucessfully");
    }
}

async function insertData()
{
    let data = await getConnection();
    let result = await data.insertOne({"Batch":"PPA","Fees":17500});
    if(result.acknowledged)
    {
        console.log("Insert Operation is performed sucessfully");
    }
}

async function updateData()
{
    let data = await getConnection();
    let result = await data.updateOne({"Fees":17500},{$set : {Batch : "LB"}})
    if(result.acknowledged)
    {
        console.log("Update Operation is performed sucessfully");
    }
}


function main()
{
    
    //deleteData();
    
    //insertData();

    updateData(),

    readData();
}

main();

getConnection();