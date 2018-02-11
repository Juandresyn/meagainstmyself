const path = require('path');
const config = require('../utils/getMockPaths');

for (let item in config) {
    if (config.hasOwnProperty(item)) config[item].path = path.resolve(__dirname, config[item].data);
}

module.exports = config;
