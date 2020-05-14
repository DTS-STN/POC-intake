const mongoose = require("mongoose");

const pocSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        }
      }
    },

    lname: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        }
      }
    },

    email: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a@b.com";
        }
      }
    },

    message: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        }
      }
    }
  },
  { collection: "poc" }
);

module.exports = mongoose.model("Poc", pocSchema);
