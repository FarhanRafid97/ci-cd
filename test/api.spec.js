const request = require('supertest');
const app = require('../app');

describe('POST /auth/register', () => {
  const userPayload = { username: 'test.sabrina', password: 'sabrinaberbinar' };

  it('status: 400 and code "auth/register-invalid" when request body empty', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({ username: '', password: '' })
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(400);

    expect(response.body.error.code).toEqual('auth/register-invalid');
  });

  it('status: 200 and the credential information', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send(userPayload)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('accessToken');
    expect(response.body.username).toEqual(userPayload.username);
  });

  it('status: 400 and code "auth/user-exists" when user already exists', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send(userPayload)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(400);

    expect(response.body.error.code).toEqual('auth/user-exists');
  });
});
