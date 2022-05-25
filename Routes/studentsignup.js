const express = require('express');
const routes = express.Router();
const getsignup = require('../app/controller/signupcontroller')




routes.get('/student',getsignup.form);
routes.post('/student',getsignup.postdata);

module.exports = routes;