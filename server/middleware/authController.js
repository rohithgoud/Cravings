const JWT = require('jsonwebtoken')

const requireSignIn = async (req,res,next)=>{
    try{

        const decode  = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();

    }catch(err){
        res.status(404).send({message:"Authentication error"})
    }
}


module.exports = requireSignIn;