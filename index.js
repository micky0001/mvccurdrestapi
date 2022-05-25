const express = require('express');
const dotenv = require('dotenv').config()
const cookieparser = require('cookie-parser')
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvcstudent').then(()=>{
    console.log('data base coneection successful');
}).catch((err)=>{
    console.log(err);
});
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
const studentrouts = require('./Routes/sturoutes');
const signup = require('./Routes/studentsignup');
const signin = require('./Routes/studentsignin');

app.use('/students',studentrouts);
app.use('/signup',signup);
app.use('/signin',signin);

const {auth} = require('./app/middlewares/auth');

app.get('/secret',auth,(req,res)=>{
    res.render('secret');
})






app.listen(2000,()=>{
    console.log(`app is runing on port ${2000}`);
})
