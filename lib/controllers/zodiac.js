const { Router } = require('express');
const { zodiac } = require('../zodiac-data');
module.exports = Router()

  .get('/', (req, res) => {
    const signs = [];
    zodiac.map((sign) => {
      signs.push(sign);
    });
    res.json(signs);
  })

  .get ('/:id', (req, res) => {
    const { id } = req.params;
    const sign = zodiac.find((sign) => sign.id === id);
    res.json(sign);

  })

  .get('/horoscope/:name', (req, res) => {
    const { name } = req.params;
    const sign = zodiac.find((sign) => sign.name === name);
    res.json(sign.horoscope);
  });
