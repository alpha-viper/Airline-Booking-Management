const {FlightService}=require('../services/index');

const flightService=new FlightService();

const create = async(req,res) =>
{
    try {
        console.log(req.body);
        const flight=await flightService.createFlight(req.body);
        return res.status(200).json({
            data:flight,
            success:true,
            err:{},
            message: 'Succesfully created the flight',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create the flight',
            err: error
        })
    }
}

const getAll=async(req,res)=>
{
    try {
        const response=await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message: 'Succesfully fetched all the flight',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to fetch all the flights',
            err: error
        })
    }
}

module.exports={
    create,
    getAll
}