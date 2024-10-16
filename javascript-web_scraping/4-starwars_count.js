#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach(film => {
      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        count++;
      }
    });

    console.log(count);
  } else {
    console.error('Error fetching data:', error);
  }
});
