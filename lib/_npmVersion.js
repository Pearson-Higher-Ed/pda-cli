const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _npmVersion(version){
  console.log(colors.yellow('Bumping Version...'));
  exec(`npm version ${version}`);
  console.log(colors.green('New Version'), version);
};
