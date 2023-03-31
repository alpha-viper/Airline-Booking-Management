const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');
const {JWT_KEY }=require('../config/serverConfig');
const bcrypt=require('bcrypt');
const {User}=require('../models/index');
class UserService{
    constructor()
    {
        this.userRepository=new UserRepository();
    }

    async create(data)
    {
        try {
            const user=await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at the services  layer");
            throw {error};
        }
    }
    async signIn(email,plainPassword)
    {
        try {
            //step1-> fetch the user by email
            const user=await this.userRepository.getByEmail(email);
            
            //step2-> compare incoming plain password with stores encrypted password
           // console.log(user.password,plainPassword);

            const passwordsMatch=this.checkPassword(plainPassword,user.password);
            if(!passwordsMatch)
            {
                console.log("Password didn't match");
                throw {error:'Invalid password'};
            }

            //step3-> if passwords atch create a new token and send it to the user
            const newJWT=this.createToken({email:user.email,id:user.id});
           // console.log(newJWT);
            return newJWT;
        } catch (error) {
            console.log("User couldn't signIn");
            throw {error};
        }
    }
    
    async isAuthenticated(token){
        try {
            const response=this.verifyToken(token);
            if(!response)
            {
                throw {error:'Invalid token'};
            }
            const user=this.userRepository.getById(response.id);
            if(!user)
            {
                throw {error:'No user with the corresponding token'};
            }
            return user.id;
        } catch (error) {
            console.log("Something wrong with the auth process");
            throw {error};
        }
    }

    createToken(user)
    {
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            console.log(result);
            return result;
        } catch (error) {
            console.log("Something went wrong at the token creation");
            throw {error};
        }
    }

    verifyToken(token)
    {
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong at the token verification");
            throw {error};
        }
    }

    checkPassword(userInputPlainPassword,encryptedPasword)
    {
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPasword);
        } catch (error) {
            console.log("Something went wrong at the password checking");
            throw {error};
        }
    }

    isAdmin(userId)
    {
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log('Something went wrong at the service layer');
           throw {error};
        }
    }
    
}

module.exports=UserService;