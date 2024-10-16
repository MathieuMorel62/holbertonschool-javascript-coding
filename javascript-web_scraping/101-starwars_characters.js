#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  const data = JSON.parse(body);
  const characters = data.characters;
  const characterNames = [];

  let count = 0;

  characters.forEach(characterUrl => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        return;
      }
      const characterData = JSON.parse(body);
      characterNames.push(characterData.name);

      count++;
      if (count === characters.length) {
        characterNames.forEach(name => console.log(name));
      }
    });
  });
});
