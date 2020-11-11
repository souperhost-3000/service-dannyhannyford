/* eslint-disable no-shadow */
const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const { Place } = require('../database/Place.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));
app.use('/listings/:num', express.static(PUBLIC_DIR));

app.get('/api/listings/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  const start = id - 1;
  const end = Number(id) + 12;
  Place.find({ listing_id: { $gt: start, $lt: end } })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.post('/api/listings:listing_id', (req, res) => {
  const listing = req.body;
  Place.create(listing)
    .then(res.send(200))
    .catch((err) => res.send(err));
});

module.exports = app;
