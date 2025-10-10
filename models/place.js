// models/place.js
const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  category: String,
  rating: Number,
  reviews: Number,
  address: String,
  lat: Number,
  lon: Number,
  thumbnail: String,
  city: String,
});

module.exports = mongoose.model("Place", placeSchema);
