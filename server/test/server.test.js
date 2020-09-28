require('regenerator-runtime');
const supertest = require('supertest');
const app = require('../index.js');

const request = supertest(app);

it('Gets the listings endpoints', async (done) => {
  const res = await request.get('/api/listings');
  expect(res.body).toHaveLength(100);
  expect(res.status).toBe(200);
  done();
});
