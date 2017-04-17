const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _pushTags(){
  exec('git push --tags');
  console.log(colors.green('Pushing tags to github...'));
};
