const express = require("express");
const router = express.Router();
const Poc = require('../models/poc');

router.get('/poc', function(req, res){
    Poc
    .find(function(err, poc){ res.json(poc);})
    .catch(err => { console.log( err ) });
});

router.post('/insertpoc', function(req, res){
  const savepoc = new Poc({field1: 'test1', field2: 'test2', field3: 'test3', field4: 'test4', field5: 'test5'});
  savepoc.save()
    .then(poc => {res.status(200).json({'poc': 'your poc was saved'})})
    .catch(err => {res.status(400).send("unable to save to database")});
});


module.exports = router;
