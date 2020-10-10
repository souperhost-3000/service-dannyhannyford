/* eslint-disable no-shadow */
const redis = require('redis');

const client = redis.createClient();
client.on('connect', () => console.log('Redis connected'));

const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const { Place } = require('../database/Place.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const midWare = (req, res, next) => {
  const key = req.url;
  client.get(key, (err, result) => {
    if (err === null && result !== null) {
      res.send('from cache');
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, body, (err, reply) => {
          if (reply === 'OK') {
            res.sendResponse(body);
          }
        });
      };
      next();
    }
  });
};

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));
app.get('/', midWare, (req, res) => {
  res.send(200);
});

app.get('/api/listings/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  Place.findOne({ listing_id: id })
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
