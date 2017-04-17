const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _pushTags(){
  exec('npm install');
  console.log(colors.green('Installing dependencies...'));
};
