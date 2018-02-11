const webpack = require('webpack')
const path = require('path');
const fs = require('fs');
const mockPath = path.join(__dirname, '../mocks');
const mockArray = [];

fs.readdirSync(mockPath).forEach(function(file) {
  const path = file.replace('.json', '').split('.').join('/');
  mockArray.push(`/mocks/${path}`);
});

module.exports = mockArray;
