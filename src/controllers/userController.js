const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


//1.api
const createUser = async function(req,res){
  let userData = req.body;
  let savedData = await userModel.create(userData)
  res.send({status:true,users:savedData}) 

}

//2.api
const createLogin = async function(req,res){
  let logInData1 = req.body.emailId;
  let logInData2 = req.body.password;
  let checkData = await userModel.findOne({emailId:logInData1,password:logInData2})
  if(!checkData){
    res.send("invalid credentials")
  }
  let geneToken = jwt.sign({userId:checkData._id.toString()},"trainee at functionUp")
  res.send({status:true,Token:geneToken}) 

}

//3.api
const getUser = async function(req,res){
  let getData =req.params.userId;
  let getData2 = await userModel.findById(getData)
  if(!getData2){
    res.send({status:false,msg:"user is not found in database"})
  }
  res.send({status:true,getDetails:getData2})
}


// 4.api
const updatePosts = async function(req,res){
  let getData =req.params.userId;
  let data3 = req.body.message;

  let getData3 = await userModel.findById(getData)
  if(!getData3){
    res.send("no such user is present")
  }
  isUpdate = getData3.posts;
  isUpdate.push(data3)
  let updatedPosts = await userModel.findOneAndUpdate({_id:getData},{posts:isUpdate},{upsert:true,new:true}) 
  res.send({status:true,updated:updatedPosts})
}


//5.api
const deleteUser = async function(req,res){
  let getData =req.params.userId;
  let deleteData = await userModel.findOneAndUpdate({_id:getData},{isDeleted:true},{new:true})
  res.send({status:true,deleted:deleteData})
}


module.exports = {createUser,createLogin,getUser,updatePosts,deleteUser}