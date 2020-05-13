const mongoose = require("mongoose");

const pocSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        },
        message: props => `${props.value} is not a valid first name format`
      }
    },

    lname: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        },
        message: props => `${props.value} is not a valid last name format`
      }
    },

    email: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a@b.com";
        },
        message: props => `${props.value} is not a valid email format`
      }
    },

    message: {
      type: String,
      validate: {
        validator: function(v) {
          return v === "a";
        },
        message: props => `${props.value} is not a valid email format`
      }
    }
  },
  { collection: "poc" }
);

module.exports = mongoose.model("Poc", pocSchema);
