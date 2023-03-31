const express=require('express');
const bodyParser=require('body-parser');


const { PORT }=require('./config/serverConfig');
const app=express();
const apiRoutes=require('./routes/index');
const UserRepository=require('./repository/user-repository');
const UserService=require('./services/user-service');
const { User,Role }=require('./models/index');

const prepareAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(5051,async()=>{
        const service=new UserService();
        // const newToken=service.createToken({email:'sumit@admin.com',id:'1'});
        // console.log('new token is',newToken);
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QGFkbWluLmNvbSIsImlkIjoiMSIsImlhdCI6MTY4MDA5MDkzNSwiZXhwIjoxNjgwMDk0NTM1fQ.QJUKay__D2DzNAyeOlPPsy_01WkuGapqd07uKHaW1gY';
        // const response=service.verifyToken(token);
        // console.log(response);
        if(process.env.DB_SYNC)
        {
            db.sequelize.sync({alter:true});
        }
        // const u1=await User.findByPk(1);
        // const r1=await Role.findByPk(1);
        // u1.addRole(r1);
        
        console.log('Server started at port',5051);
    }) 
}

prepareAndStartServer();