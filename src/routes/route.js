let object1 = require('..//logger/logger');
let object2 = require('..//util/helper');
let object3 = require('..//validator/formattar')

const underscore = require('underscore');
const lodash = require('lodash');
const express = require('express');
const { fromPairs } = require('lodash');
const router = express.Router();


router.get('/test-me', function (req, res) {

//module 1
object1.welcome;

//module 2
object2.printdate;
object2.printmonth;
object2.getbatchinfo;

//module 3
object3.trim;
object3.changetoLowerCase;
object3.changetoUppeerCase;

//module 4 lodash

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let subarray = lodash.chunk(months,3)
console.log(subarray);


let oddnum = [1,3,5,7,9,11,13,15,17,19]
let lastnumber = lodash.tail(oddnum);
console.log(lastnumber);


let a1=[1,2,3,4]
let a2=[2,3,5]
let a3=[4,6,5]
let a4=[5,3,6]
let a5=[6,7,9]
let unionofarrays = lodash.union(a1,a2,a3,a4,a5);
console.log(unionofarrays);


let mov1= ['horror','The Shining']
let mov2= ['drama','Titanic']
let mov3= ['thriller','Shutter Island']
let mov4= ['fantasy','Pans Labyrinth']
let movies = fromPairs([mov1,mov2,mov3,mov4]);
console.log(movies);




res.send('My first ever api!')

});

module.exports = router;
// adding this comment for no reason