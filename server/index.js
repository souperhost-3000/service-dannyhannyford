const request = require('supertest');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Place } = require('../database/Place.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const port = 3007;
const app = express();

app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.get('/api/listings/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  Place.findOne({ listing_id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/api/listings', (req, res) => {
  Place.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

// get test for
request(app)
  .get('/api/listings')
  .expect(200)
  .end((err) => {
    if (err) throw err;
  });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', port);
});

module.exports = app;
