const express=require('express');
const bodyParser=require('body-parser');
const ApiRoutes=require('./routes/index');
const PORT = 8080;

console.log(PORT);
const setupAndStartServer = async = ()=>{

    const app=express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: 'true'}));   
    app.use('/api',ApiRoutes); 

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
    });
}

setupAndStartServer();