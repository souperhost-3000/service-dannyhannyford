/*
@jest-environment node
*/
const regeneratorRuntime = require('regenerator-runtime');
const request = require('supertest');
const app = require('../../../server');
const mongoose = require('mongoose');



describe('Get Endpoints', () => {
  beforeAll(async () => {
    const mongoURL = 'mongodb://localhost:27017/airbnb';
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((err) => console.log(err))
  });

  it('should grab an array of listings', async () => {
    const res = await request(app).get('/api/listings');
    expect(res.body).toHaveLength(100);
    expect(res.statusCode).toEqual(200);
  });

  it('should grab listing 1', async () => {
    const res = await request(app).get('/api/listings/1');
    expect(res.body.listing_id).toEqual(1);
    expect(res.statusCode).toEqual(200);
  });
});
