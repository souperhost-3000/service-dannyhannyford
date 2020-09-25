/* eslint-disable no-console */
const faker = require('faker');
const mongoose = require('mongoose');
require('./index.js');
const { Place } = require('./Place.js');

const arrangement = ['Hotel room',
  'Tiny house',
  'Entire House',
  'Entire apartment',
  'Entire condominium',
  'Entire cabin',
  'Entire bungalow',
  'Entire cottage'];

const sampleData = [];

for (let i = 1; i <= 100; i += 1) {
  const randomArrangement = Math.floor((arrangement.length * Math.random()));
  sampleData.push({
    listing_id: i,
    place_title: `${arrangement[randomArrangement]} on ${faker.address.streetName()}`,
    sleeping_arrangement: `${faker.company.catchPhraseAdjective()} ${faker.commerce.department()} · ${Math.floor(Math.random() * 5 + 1)} ${faker.random.word()}`,
    image: 'test',
    price: Math.floor(Math.random() * 1000 + 1),
    review_count: Math.floor(Math.random() * 500),
    review_average: Math.round((Math.random() * 5) * 10) / 10,
    superhost: faker.random.boolean(),
    saved: false,
  });
}
const insertSampleData = () => {
  Place.create(sampleData)
    .then(() => mongoose.disconnect())
    .catch((err) => console.log(err));
};

insertSampleData();
