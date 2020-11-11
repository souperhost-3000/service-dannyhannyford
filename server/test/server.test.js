require('regenerator-runtime');
const supertest = require('supertest');
const app = require('../index.js');

const request = supertest(app);
describe('Server Test Suite', () => {
  it('should handle a GET request for one listing from /api/listings/1', async (done) => {
    const res = await request.get('/api/listings/1');
    expect(res.body.listing_id).toBe(1);
    expect(res.status).toBe(200);
    done();
  });
});
