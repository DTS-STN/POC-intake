const mongoose = require('mongoose');

const pocSchema = new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    message: { type: String },
}, {collection: 'poc'});

module.exports = mongoose.model('Poc', pocSchema);
