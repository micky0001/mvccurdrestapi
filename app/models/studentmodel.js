const express = require('express');
const mongoose = require('mongoose');


const stuschema =  mongoose.Schema({
       name  : {
           type : String,
           require : true,
           trim : true,
       },
       class : {
         type : String,
         require : true,
       },
       age : {
           type : Number,
      require : true,
       }
});

const stumodel = mongoose.model('stumodel',stuschema);
module.exports = { stumodel};
