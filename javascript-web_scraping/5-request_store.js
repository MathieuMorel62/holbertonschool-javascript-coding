#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier:', err);
      } else {
        console.log('Contenu enregistré dans', filePath);
      }
    });
  } else {
    console.error('Erreur lors de la requête:', error);
  }
});
