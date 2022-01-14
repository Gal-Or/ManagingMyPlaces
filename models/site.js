const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requiered"],
  },
  description: {
    type: String,
    required: [true, "description is requiered"],
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Site", siteSchema);
