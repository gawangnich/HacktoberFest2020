#!/usr/bin/env node

const https = require('https');
const [ ,,category, language ] = process.argv;

const BASE_URL = 'https://quotes.rest';
let ENDPOINT = '/qod';

if (category) {
  ENDPOINT += `/${category}`;
}

if (language) {
  ENDPOINT += `?language=${language}`;
}

https.get(`${BASE_URL}${ENDPOINT}`, (res) => {
  res.on('data', (rawData) => {
    const data = JSON.parse(rawData);

    if (!data.success || data.success.total < 1) {
      process.stdout.write('No More Quotes for Today!\n');
      process.exit(0);
    }

    const quoteData = data.contents.quotes.shift();

    const quote = `
  ${quoteData.quote}

  - ${quoteData.author}
`;

    process.stdout.write(quote);
  });

}).on('error', (err) => {
  process.stderr.write(err);
});
