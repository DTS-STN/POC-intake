const mongoose = require('mongoose');

const pocSchema = new mongoose.Schema({
    field1: { type: String },
    field2: { type: String },
    field3: { type: String },
    field4: { type: String },
    field5: { type: String },
});

module.exports = mongoose.model('Poc', pocSchema);
