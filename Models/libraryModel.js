const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("title", librarySchema);
