const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const signupschema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    }
});
signupschema.pre('save',async function(next){  
   const hashpass= await bcrypt.hash(this.password , 10 );
   console.log(hashpass);
   this.password = hashpass;
    
})
const signup = mongoose.model('signup',signupschema);
module.exports = {signup};