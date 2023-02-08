const { CityService }=require('../services/index');

const cityService=new CityService();

// ::method :-> post ::: data :-> req.body
 
const create = async (req,res) => {
    try {
        const city = await this.cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created the city',
            err:{}
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create the city',
            err: error
        })
    }
}

// :: DELETE :-> /city/:id (params used to be deleted)

const destroy = async (req,res) => {
    try {
        const resposne = await this.cityService.deleteCity(req.params.id);
         return res.status(200).json({
            data:resposne,
            success: true,
            message: 'Sucessfully deleted',
            err: {}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}

// GET-> /city/:id
const get = async (req,res) => {
    try {
        const resposne = await this.cityService.getCity(req.params.id);
         return res.status(200).json({
            data:resposne,
            success: true,
            message: 'Sucessfully deleted',
            err: {}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to get the city',
            err: error
        })
    }
}

// Patch -> /city/:id(which city to update) ::: data->req.body
const update = async (req,res) => {
    try {
        const resposne = await this.cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
           data:resposne,
           success: true,
           message: 'Sucessfully updated the city',
           err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to update the city',
            err: error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}
