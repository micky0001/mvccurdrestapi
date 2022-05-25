const express = require('express');
const routes = express.Router();
const getsignin = require('../app/controller/signincontrooler');
routes.get('/student',getsignin.showpage);
routes.post('/student',getsignin.check);

module.exports = routes;