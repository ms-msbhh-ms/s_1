const  {Schema,model} = require("mongoose")

const ShortOne= new Schema({
    id:String,
    link:String
   
})



module.exports = model("shortones",ShortOne)