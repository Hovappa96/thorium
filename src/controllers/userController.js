const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//1.api
const createUser = async function (req,res ){
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ users: savedData });
};
//2.api 
const userLogin = async function (req,res){
  let userdata1 = req.body.emailId;
  let userdata2 = req.body.password;
// to find the details
  let userLog = await userModel.findOne({emailId:userdata1,password:userdata2})
  if(!userLog)
  {
    return res.send("no such user is found")
  }
//to create an token
  let token = jwt.sign({userId:userLog._id.toString()},"Trainee at FunctionUp");
  res.send({status:true,datails:token})
}


//3.api
const getUserDetails = async function(req,res){
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);



  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });


  let userId = req.params.userId;
  let userDetails = await userModel.findById({_id:userId})
  if(!userDetails){
    return res.send("no such userId is present")
  }
  res.send({status:true,userdata:userDetails})
}

//4.api
const updatedata = async function(req,res){
  let updates = req.params.userId

  //userId validation
  let updateDetails = await userModel.findById(updates)
  if(!updateDetails)
  {
    return res.send({status:false,msg:'no such userId is present'})
  }
  
  //updating data
  let datas = await userModel.findOneAndUpdate({_id:updates},{mobile:"9731243422"},{new:true})
  res.send({status:true,updated:datas})
}



//5.api
  const deleteUser = async function (req,res){
  let userId = req.params.userId

  //userId validation
  let isPresent = await userModel.findById(userId)
  if(!isPresent)
  {
    return res.send({status:false,msg:"no such user is present"})
  }
  
  //deleting userdata (isdeleted:true)
  let deletedata = await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
  res.send({status:true,deleteddata:deletedata})
}





module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUserDetails = getUserDetails;
module.exports.updatedata=updatedata;
module.exports.deleteUser=deleteUser;
