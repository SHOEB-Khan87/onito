const mongoose = require("mongoose");



const userSchema =  mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firtsName:{
        type:String
    },
    age:{
        type:String
    },
    Mobile:{
        type:Number
    },
    sex:{
        type:String
    },
    ID:{
        type:String
    },
    Id_Number:{
        type:String
    },
    Email:{
        type:String
    },
    Emergency_Contact_Number:{
        type:Number
    },
    pinCode:{
        type:Number
    },
    GuardianLabel:{
        type:String
    },
    GuardianName:{
        type:String
    },
    
    Address:{
        type:String
    },
    
    State:{
        type:String
    },
    
    City:{
        type:String
    },
    
    Country:{
        type:String
    },
    
    Occupation:{
        type:String
    },
    Religion:{
        type:String
    },
    
    Marital_Status:{
        type:String
    },
    Nationality:{
        type:String
    },
    Blood_Group:{
        type:String
    },
    
   
    
   
    
    
    
})
let User = mongoose.model("User",userSchema);
module.exports = User