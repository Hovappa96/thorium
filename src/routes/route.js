const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)

});

// 1.create an API for GET /movies
router.get('/movie', function(req, res) {
    let marvelmovies= ['Ironman','Avenger End Game','Captain America','captain marvel','venom']
    res.send(marvelmovies)

});

//2.Create an API GET movies/indexNumber
router.get('/movies/:indexNumberld', function(req, res) {
    let movies= ['Spiderman','Docter strange','black panther','thor']
    let value=req.params.indexNumberld;
    if(value > movies.length-1)
    {
        res.send('movie does not exit please enter valid index number')
    } 
    else
    {
        res.send(movies[value])
    }

});

//4.Create an API GET /films
router.get('/films', function(req, res){
let array = [ {
    id: 1,
    name: 'The Shining'
   }, 
   {
    id: 2,
    name: 'Incendies'
   }, 
   {
    id: 3,
    name: 'Rang de Basanti'
   }, 
   {
    id: 4,
    name: 'Finding Demo'
   }]

res.send(array)
});

// 5.
// router.get(/films/:filmsld)







module.exports = router;
