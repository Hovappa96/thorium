const express = require('express');
const router = express.Router();





router.get("/test-me", function (req, res) {
    res.send("MiddleWare Is Runing Perfectly")
})

router.get("/clickHere", function(req,res){
    res.send("Hello, Welcome")
})




module.exports = router;