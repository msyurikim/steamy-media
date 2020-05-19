/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('./index.js');

const databaseName = 'mediaDb';
const request = supertest(app);

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}); 

test('should add 2 and 2', () => {
  expect(2 + 2).toEqual(4);
});

describe('Test Server', () => {
  test('should make get request', async (done) => {
    const response = await request.get('/media');
    expect(response.statusCode).toBe(200);
    done();
  });
});
