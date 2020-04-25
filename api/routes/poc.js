const express = require("express");
const router = express.Router();
const Poc = require('../models/poc');

//Gets all existing PoC's in database
router.get('/poc', function(req, res){
    Poc
    .find(function(err, poc){ res.json(poc);})
    .catch(err => { console.log( err ) });
});

//Saves our form data
router.post('/insertpoc', function(req, res){
  const savepoc = new Poc({
    fname: `${req.query.fname}`,
    lname: `${req.query.lname}`,
    email: `${req.query.email}`,
    message: `${req.query.message}`
  });
  savepoc.save()
    .then(poc => {res.status(200).json({'poc': 'your poc was saved'})})
    .catch(err => {res.status(400).send("unable to save to database")});
});

module.exports = router;
