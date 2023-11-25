express = require('express');

eobj = express();

port = 5100;

function StartServer()
{
    console.log("Paras Server started successfully...")
}

eobj.listen(port,StartServer);



  
//Handling Corse
eobj.use((req,res,next)=>{

    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");


    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");
    next();

});


eobj.get('/',function(req,res)
{
    res.send("Paras Server is live now...")
})

eobj.get('/getBatches',ParasGetBatches)

function ParasGetBatches(req,res)
{
    res.json({"batch" : "PPA","Fees" : 18500});

}