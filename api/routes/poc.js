const express = require("express");
const router = express.Router();
const Poc = require('../models/poc');

router.get('/', function(req, res){
    Poc
    .find(function(err, poc){ res.json(poc);})
    .catch(err => { console.log( err ) });
});

module.exports = router;
