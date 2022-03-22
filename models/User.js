const { Schema, model } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  roles: [
    {
      type: String,
      ref: "Role"
    }
  ],
  biography: {
    type: String
  }
});

module.exports = model("User", User);
