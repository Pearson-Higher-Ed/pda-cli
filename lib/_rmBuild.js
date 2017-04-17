const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _rmBuild(){
  exec('rm -rf build');
  console.log(colors.green('Build directory removed...'));
};
