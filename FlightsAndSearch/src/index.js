const express=require('express');

const { PORT } = require('./config/serverConfig');

console.log(PORT);
const setupAndStartServer = async = ()=>{

    const app=express();
    
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
    });
}

setupAndStartServer();