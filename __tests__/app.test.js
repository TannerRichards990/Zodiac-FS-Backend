const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/ should return a list of all the zodiac signs', async () => {
    const res = await request(app)
      .get('/zodiac');
    expect(res.body).toEqual(zodiac);
  });
});

it('/zodiac:id should return a single zodiac sign', async () => {
  const res = await request(app).get('/zodiac/1');
  const signOne = { id: '1',
    name: 'aquarius',
    dates: 'Jan 21 - Feb 19',
    symbol: 'Water Bearer',
    horoscope: 'Will you go out with me? Be careful if a person says yes when you ask that question today, Aquarius. You could take the nature of this situation to the extreme. Saying yes doesnt mean youre suddenly in charge of his or her life. Nor are you responsible for anything that person does or how they feel. If youre still asking the question without getting any positive responses, dont worry. Keep trying.' };
  expect(res.body).toEqual(signOne);
});

it('/horoscope/:name should return a single zodiac sign', async () => {
  const res = await request(app)
    .get('/zodiac/horoscope/leo');
  expect(res.body).toEqual(zodiac[5].horoscope);
});





