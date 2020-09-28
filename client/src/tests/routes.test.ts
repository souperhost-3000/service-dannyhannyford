const request = require('supertest');
const app = require('../../../server');

describe('Get Endpoints', () => {
  it('should grab an array of listings', async () => {
    const res = await request(app)
      .get('/api/listings');
    expect(res.body).toHaveLength(1);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('listing_id');
  });
});
