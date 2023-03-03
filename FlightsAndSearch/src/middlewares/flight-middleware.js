const {ClientErrrorCodes}=require('../utils/error-codes');

const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber || !req.body.airplaneId || req.body.departureAirportId || !req.body.arrivalAirportId || !req.body.arrivalTime
        || !req.body.departureTime || !req.body.price
        )
    {
        return res.status(ClientErrrorCodes.BAD_REQUEST).json({
            data:{},
            success:true,
            message:'Invalid request body to create flight',
            err:'Missing mandatory properties to create a flight'
        })
    }
   
    next();
}

module.exports={
    validateCreateFlight
}

/**
 * flightNumber
 * AirplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 *  totalSeats->fetch from airplane
 */