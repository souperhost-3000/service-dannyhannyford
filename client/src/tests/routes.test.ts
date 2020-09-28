/*
@jest-environment node
*/
const request = require('supertest');
const app = require('../../../server');
const regeneratorRuntime = require('regenerator-runtime');

describe('Get Endpoints', () => {
  it('should grab an array of listings', async () => {
    const res = await request(app)
      .get('/api/listings');
    expect(res.body).toHaveLength(100);
    expect(res.statusCode).toEqual(200);
  });
});
