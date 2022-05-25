const { json } = require('express/lib/response');
const jwt = require('jsonwebtoken')
const auth = async(req,res,next)=>{
   try{
    const token = await req.cookies.jwt;
    const result = await jwt.verify(token ,process.env.secret);
    next();
   }
   catch(err)
   {
       res.send(err.message); 
   }
}


module.exports ={auth};