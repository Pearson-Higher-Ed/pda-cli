const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _startServer(){
  exec('webpack -p');
  console.log(colors.green('Starting Webpack Server...'));
};
