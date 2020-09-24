const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const placeSchema = new mongoose.Schema({
  listing_id: Number,
  place_title: String,
  sleeping_arrangement: String,
  price: Number,
  review_count: { type: Number, default: 0 },
  review_average: { type: Number, default: 0 },
  superhost: Boolean,
  saved: Boolean,
});

const Place = mongoose.model('Place', placeSchema);

module.exports = {
  Place,
  db,
};
