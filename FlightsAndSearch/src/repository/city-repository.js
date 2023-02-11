const { Op } = require('sequelize');
const { City }=require('../models/index');

class CityRepository{

   async createCity({ name })
   {
    try {
        console.log("repository of create city");
        const city = await City.create({ 
            name 
        });
        return city;
    } catch (error) {
        throw { error };
    }
   }

   async deleteCity(cityId)
   {
    try {
        await City.destroy({
            where:{
                id: cityId
            }
            
        })
        return true;
    } catch (error) {
        throw { error };
    }
   }
   async updateCity(cityId,data)
   {
    try {
        //in postgres
        // const city= await City.update(data,{
        //     where:{
        //         id: cityId
        //     },
        //     returning: true,
        //     place: true
        // })
        //The below approach returns updated object
        const city=await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
    } catch (error) {
        throw {error};
    }
   }
   async getCity(cityId)
   {
    try {
        const city=await City.findByPk(cityId);
        return city;
    } catch (error) {
        throw {error};
    }
   }

   async getAllCities(filter)
   {
    try {
        if(filter.name) //filter can be empty
        {
            const cities=City.findAll({
                where:{
                    name:{
                        [Op.startsWith]: filter.name
                    }
                }
            });
            return cities;
        }
        const cities=await City.findAll();
        return cities;
    } catch (error) {
        throw {error};
    }
   }
}

module.exports = CityRepository;