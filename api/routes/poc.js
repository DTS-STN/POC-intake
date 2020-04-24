const express = require("express");
const router = express.Router();

const Poc = require('../models/poc');


// @route   GET api/employees
// @desc    Get All Employees
// @access  Public requires the user to have log first

router.get('/', function(req, res){

    console.log(" trying to get the data ")

    Poc
    .find(function(err, poc){ res.json(poc);})
    .catch(err => { console.log( err ) });
});

module.exports = router;