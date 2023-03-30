const validateUserSignup=(req,res,next)=>{
    if(!req.body.email || !req.body.password)
    {
        return res.status(400).json({
            success:false,
            message:'Something went wrong',
            data:{},
            error:'Either email or password is missing in a signup request'
        })
    }
    next();
}
const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password)
    {
        return res.status(400).json({
            success:false,
            message:'Something went wrong',
            data:{},
            error:'Either email or password is missing in a auth request'
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateUserSignup
}