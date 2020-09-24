const db = require('./index.js');

const Place = require('./Place.js');

const sampleData = [];

const insertSampleData = () => {
  Place.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();
