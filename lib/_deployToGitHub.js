const { exec } = require('child_process');
const colors   = require('colors');

// run build and test before this command...
module.exports = function _deployToGitHub(){
  exec('git subtree push --prefix build origin gh-pages')
  console.log(colors.green('Deploying Project to GitHub Pages...'));
};
