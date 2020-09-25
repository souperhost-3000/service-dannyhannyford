/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/airbnb';

const db = mongoose.connect(mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

module.exports = db;
