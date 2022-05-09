const mongoose = require("mongoose");

const { Schema } = mongoose;

const twitter_users = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    followers: {
      type: Array,
    },
    following: {
      type: Array,
    },
    token: {
      type: String,
    },
    profile_picture: {
      type: String,
      minlength: 10,
    },
    dob: {
      type: Date,
      default: new Date(),
    },
    created_at: {
      type: Date,
      default: new Date(),
    },
    updated_date: {
      type: Date,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model(
  "twitter_users",
  twitter_users,
  "twitter_users"
);
