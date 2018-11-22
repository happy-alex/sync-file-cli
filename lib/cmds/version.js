const package = require('../../package.json');
module.exports = () => {
    console.log('v' + package.version);
}