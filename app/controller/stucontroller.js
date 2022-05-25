const express = require('express');
const { stumodel} = require('../models/studentmodel');
module.exports = {
    postdata : async(req,res)=>{
            try
            {
                console.log(req.body.name);
               const studata = await new stumodel({
                   name : req.body.name,
                   class : req.body.class,
                   age : req.body.age,
               });
              await studata.save();
               res.send("data save");
            }
            catch(err)
            {
console.log(err);
            }
    }
    ,
    getdata : async(req,res)=>{
        try
        {
           const data = await stumodel.find();
           res.send(data);
        }
        catch(err)
        {

        }
        }
        ,
        putdata : async(req,res)=>{
            try
            {
                console.log(req.body.name);
                _id = req.params.id;
                const data = await stumodel.findByIdAndUpdate({_id : _id}, {$set : {
                    name : req.body.name,
                    class : req.body.class,
                    age : req.body.age,
                }})
              res.send(data);
            }
            catch(err)
            {
    
            }
            },
            getsignin : async(req,res)=>{
                try{
            res.send("wellcome");
                }
                catch(err)
                {

                }
            }
}