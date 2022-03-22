const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

const createCollege = async function (req, res) {
    try {
        let data = req.body;
        let name = req.body.name;
        let fullName = req.body.fullName;
        let logoLink = req.body.logoLink;

        if (!name) {
            res.status(400).send({ status: false, mag: 'name is required' })
        }

        if (!fullName) {
            res.status(400).send({ status: false, mag: 'fullname is required' })
        }

        if (!logoLink) {
            res.status(400).send({ status: false, mag: 'url is required' })
        }

        let savecollege = await collegeModel.create(data)
        res.status(201).send({ status: true, msg: 'document created successfully', data: savecollege })
    }
    catch (err) {
        res.status(500).send({ status: false, mag: err.message })
    }
}



const getCollegeDetails = async function (req, res) {
    try {
        let data = req.query.collegeName;
        if (!data) {
            res.status(400).send({ status: false, msg: "No parameters passed" })
        }
        let name = data;
        let getCollegeId = await collegeModel.find({ name, isDeleted:false })
        if (!getCollegeId) {
            return res.status(404).send({ status: false, msg: "no college document is present" })
         }
        let id = getCollegeId[0]._id
        // console.log(id)
        
        let findIntern = await internModel.find({ collegeId:id }).select({ _id: 1, name: 1, email: 1, mobile: 1 })
        if (!findIntern) {
            return res.status(404).send({ status: false, msg: "no intern is present" })
        }
        // console.log(findIntern)

        let details = await collegeModel.find({ name }).select({ _id: 1, name: 1, fullName: 1, logoLink: 1, interests: findIntern })

        res.status(200).send({ status: true, msg: "interns list", data: details })
    
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}

module.exports.createCollege = createCollege;
module.exports.getCollegeDetails = getCollegeDetails;