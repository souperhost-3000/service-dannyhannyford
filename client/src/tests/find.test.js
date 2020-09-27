/* eslint-disable no-console */
const mongoose = require('mongoose');
require('../../../database/index.js');
const { Place } = require('../../../database/Place.js');

Place.find()
  .then((data) => describe('Database', () => {
    it('should have 100 items after it has been seeded', () => {
      expect(data.length).toBe(100);
    });
  }))
  .then(() => mongoose.disconnect())
  .catch((err) => console.log(err));
