const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)

router.get("/cowin/districtInStates",cowinController.getBydisId);

router.get("/weather",cowinController.getWeather)

router.get("/memes", cowinController.getMemes)

router.post("/postmemes",cowinController.memePost)

router.get("/sortTemp", cowinController.sortTemp)




module.exports = router;