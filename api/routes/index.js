var express = require("express");
var app = express();
const Poc = require("../models/poc");

// @route   GET api/allpocs
// @desc    Gets all existing PoC's in database
// @access  Public
app.get("/allpocs", function(req, res) {
  Poc.find((err, poc) => {
    res.json(poc);
  }).catch(err => {
    console.log(err);
  });
});

// @route   POST api/insertpoc
// @desc    Saves our form data
// @access  Public
app.post("/insertpoc", function(req, res) {
  const savepoc = new Poc({
    fname: `${req.query.fname}`,
    lname: `${req.query.lname}`,
    email: `${req.query.email}`,
    message: `${req.query.message}`
  });
  savepoc
    .save()
    .then(() => {
      res.status(200).json({ poc: "your poc was saved" });
    })
    .catch(err => {
      //catches mongoose validation (SS Validation)
      if (err.name == "ValidationError") {
        res.status(201).json(err);
      } else {
        console.log(err);
      }
    });
});

module.exports = { path: "/api/", handler: app };
