const fs = require('fs');

const file = fs.readFileSync(`${__dirname}/README.md`).toString();

const TOKEN = '## Comments and Wishes';
const commentsAndWishes = file.split(TOKEN)[1];

console.log(commentsAndWishes);
