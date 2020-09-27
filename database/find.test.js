/* eslint-disable no-console */
const mongoose = require('mongoose');
require('./index.js');
const { Place } = require('./Place.js');

Place.find()
  .then((data) => console.log(data.length))
  .then(() => mongoose.disconnect())
  .catch((err) => console.log(err));
