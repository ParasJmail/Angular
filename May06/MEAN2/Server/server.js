//backend ->Server side

express = require ('express');

eobj = express();

eobj.listen(5100,function()
{
    console.log("Paras Server Running Successfully")

});

eobj.get('/PPA',function(request,response)
{
    response.send("This is the information of PPA Batch");
});

eobj.get('/Angular',function(request,response)
{
    response.send("This is the information of Angular Batch");
});

eobj.get('/LB',function(request,response)
{
    response.send("This is the information of LB Batch");
});
