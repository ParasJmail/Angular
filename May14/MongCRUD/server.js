const express = require('express');

const eobj = express();

/////////////////////////////////////////////////////////////////////////////////////////
//For MongoDb
const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017/";

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
    let collection = db.collection("Batches");
    let response = await collection.find({}.toArray());
    console.log(res);

}

getConnection();