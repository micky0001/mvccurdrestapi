const {signup} = require('../models/signup');
module.exports={
    form:async(req,res)=>{
        try
        {
          res.render('index');
        }
        catch(err)
        {

        }
    },
    postdata:async(req,res)=>{
        try
        {
          console.log(req.body);
          const pass = req.body.password;
          const cpass = req.body.confirmpass;
          if(pass == cpass)
          {
              const data = await new signup({
                  name : req.body.name,
                  email : req.body.email,
                  password : req.body.password,
              })
             await data.save();
             res.send("signup  successfulyy");
          }
          else
          {
              res.send("pass not match");
          }

        }
        catch(err)
        {

        }
    }
}