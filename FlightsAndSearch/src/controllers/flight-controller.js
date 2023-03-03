const {FlightService}=require('../services/index');

const flightService=new FlightService();

const create = async(req,res) =>
{
    try {
        const flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        console.log(req.body);
        const flight=await flightService.createFlight(flightRequestData);
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