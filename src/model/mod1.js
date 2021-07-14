const mongoose = require("mongoose")

const validator =require("validator")

const employeeScheama = new mongoose.Schema({

   name: {
       type:String,
       required:true
   },
   email: {
    type:String,
    required:true ,

    validator(value){

        if(!value.isEmail()){
            res.send('invalid email')
            
        }
        }
},
password: {
    type:String,
    required:true
}

})


const Register = new mongoose.model("Register",employeeScheama)

module.exports = Register    

