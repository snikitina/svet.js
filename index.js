const fs = require('fs');

const file = fs.readFileSync('./README.md').toString();

const TOKEN = '## Comments and Wishes';
const commensAndWishes = file.split(TOKEN)[1];

console.log(commensAndWishes);
