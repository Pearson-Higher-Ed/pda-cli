const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _buildProject(){
  exec('npm run build');
  console.log(colors.green('Building Project...'));
};
