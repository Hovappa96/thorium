let axios = require("axios");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// 1.
const getBydisId = async function (req, res) {
    try {
        let data1 = req.query.district_id;
        let data2 = req.query.date;
        let options =
        {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${data1}&date=${data2}`
        }
        let result = await axios(options);
        let data = result.data;
        res.status(200).send({ status: true, msg: data })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


// 2.
const getWeather = async function(req,res){
    try{
    let city = req.query.q;
    let appId = req.query.appid;
    let options =
    {
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
    }
    let results = await axios(options);
    let data= results.data.main.temp;
    res.status(200).send({status:true,msg:data})
}
catch(error){
    res.status(500).send({status:false,msg:error.message})
}
}


const sortTemp = async function(req,res){
    let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let newArray = [];
    for(i=0; i<cities.length; i++){
        let  obj = { city:cities[i] }
        let options = {
            method:"get",
            url :`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=691d2132f4a4cce9565ac5d7858ca0cc`
        }
        let result = await axios(options);
        obj.temp = result.data.main.temp;
        newArray.push(obj);
    }
    newArray.sort(function(a , b) {
        return a.temp-b.temp;
    })
    res.status(200).send({status:true,msg:newArray})
}





//3.Axios POST request assignment
const getMemes = async function(req,res){
    try{
    let options = {
        method:"get",
        url:`https://api.imgflip.com/get_memes`
    }
    let getResult = await axios(options);
    let data = getResult.data;
    res.status(200).send({status:true,msg:data})

}
catch (error) 
{
    res.status(500).send({status:false,msg:error.message})
}

}



const memePost = async function(req,res){
    try{
    let id = req.query.template_id;
    let text1 = req.query.text0;
    let text2 =req.query.text1
  
    let options = {
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text1}&text1=${text2}&username=chewie12345&password=meme@123`
    }
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({status:true,msg:data})
}
catch(error)
{
    res.status(500).send({status:false,msg:error.message})
}

}


module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getBydisId = getBydisId;
module.exports.getWeather=getWeather;
module.exports.getMemes=getMemes;
module.exports.memePost=memePost;
module.exports.sortTemp = sortTemp;