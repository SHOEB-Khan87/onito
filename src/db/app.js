const { json } = require('body-parser')
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose");
const app = express()
const port =5000
const User = require("../model/user");
app.use(express.json())

 mongoose.connect("mongodb+srv://skshoaibkhan156:Android%408712@cluster0.yz5dfen.mongodb.net/userData")
 .then(()=>console.log("database connected")).catch(()=>console.log("not connected"))


app.use(cors({
  origin:"http://localhost:3000",
}))

app.get("/getUserData",async (req,res)=>{
  console.log(req.body)
  try {
    const userData = await User.find({});
    res.send({status:"ok",data:userData})
  } catch (error) {
    console.log(error)
  }
})


//   app.options('*', core);
app.get('/', (req, res) => {
  res.send({
    name:"helllo",
    
  })
  
})

app.use(express.urlencoded({extended:true}))



const { Db } = require('mongodb');


app.post("/", async(req,res)=>{
  const data = new User({
      _id: new mongoose.Types.ObjectId, 
      firtsName:req.body.Name,
      age:req.body.age,
      Mobile:req.body.Mobile,
      sex:req.body.Sex,
      ID:req.body.ID,
      Id_Number:req.body.Id_Number,
      Email:req.body.Email,
      Emergency_Contact_Number:req.body.Emergency_Contact_Number,
      pinCode:req.body.pinCode,
      GuardianLabel:req.body.GuardianLabel,
      GuardianName:req.body.GuardianName,
      Address:req.body.Address,
      State:req.body.State,
      City:req.body.City,
      Country:req.body.Country,
      Occupation:req.body.Occupation,
      Religion:req.body.Religion,
      Marital_Status:req.body.Marital_Status,
      Nationality:req.body.Nationality,
      Blood_Group:req.body.Blood_Group
     
    
    })
      await data.save()
    
      .then(result=>{
        console.log(result);
        res.status(200).json({
          newData:result
        })
      })
 data.save()
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// const data = new User({
//   _id:new mongoose.Types.ObjectId, 
//   firtsName:req.body.Name,
//   age:req.body.age,
//   Mobile:req.body.Mobile,
//   sex:req.body.Sex,
//   ID:req.body.ID,
//   Id_Number:req.body.Id_Number,
//   Email:req.body.Email,
//   Emergency_Contact_Number:req.body.Emergency_Contact_Number,
//   pinCode:req.body.pinCode,
//   GuardianLabel:req.body.GuardianLabel,
//   GuardianName:req.body.GuardianName,
//   Address:req.body.Address,
//   State:req.body.State,
//   City:req.body.City,
//   Country:req.body.Country,
//   Occupation:req.body.Occupation,
//   Religion:req.body.Religion,
//   Marital_Status:req.body.Marital_Status,
//   Nationality:req.body.Nationality,
 

// })
//   await data.save()
//   .then(result=>{
//     console.log(result);
//     res.status(200).json({
//       newData:result
//     })
//   })