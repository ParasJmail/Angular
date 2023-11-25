//backend ->Server side

express = require ('express');

eobj = express();

port = 5100;

function StartServer()
{
    console.log("Paras Server Started Sucessfully");
}


eobj.listen(port,StartServer);

function GetMethod(request,response)
{
    response.send("Paras Server is live");
}
eobj.get('/',GetMethod);
