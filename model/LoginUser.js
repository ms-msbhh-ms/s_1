const  {Schema,model} = require("mongoose")

const LoginUser= new Schema({
    email:String,
    password:String,
    code:String
   
})



module.exports = model("loginusers",LoginUser)