const {signup} = require('../models/signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports={
    check :async(req,res)=>
    {
      try
      {
         const email = req.body.email;
         const userpass = req.body.password;
        const data = await signup.findOne({email : email});
       const ans = await bcrypt.compare(userpass,data.password);
       console.log(ans);
        if(ans)
        {
          
         const sign =  await jwt.sign({_id : data._id} , "secretkey");
         console.log(sign);
         res.cookie('jwt',sign);
         res.send(`wellcome ${data.name}`);
        }
        else
        {
         res.send("passwoerd not match");
        }
      }
      catch(err)
      {
           console.log(err);
      }
    },
    showpage:(req,res)=>{
    res.render('signin');
    }
 }