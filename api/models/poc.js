const mongoose = require('mongoose');

const pocSchema = new mongoose.Schema({
<<<<<<< HEAD
    field1: { type: String },
    field2: { type: String },
    field3: { type: String },
    field4: { type: String },
    field5: { type: String },
});
=======
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    message: { type: String },
}, {collection: 'poc'});
>>>>>>> origin/pond-api

module.exports = mongoose.model('Poc', pocSchema);
