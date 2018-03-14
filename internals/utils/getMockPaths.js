const path = require('path');
const fs = require('fs');
const mockPath = path.join(__dirname, '../mocks');
const mockObject = {};

fs.readdirSync(mockPath).forEach(function(file) {
  const path = file.replace('.json', '').split('.').join('/');
  mockObject[`/mocks/${path}`] = {
    data: `../mocks/${file}`
  };
});

module.exports = mockObject;
