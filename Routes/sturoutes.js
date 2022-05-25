const express = require('express');
const routes = express.Router();


const stucontroll = require('../app/controller/stucontroller');
routes.get('/students',stucontroll.getdata);
routes.post('/students',stucontroll.postdata);
routes.put('/students/:id',stucontroll.putdata);
routes.get('/signin',stucontroll.getdata);



module.exports=routes;




