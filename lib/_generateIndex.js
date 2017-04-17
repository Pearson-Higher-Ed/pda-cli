const fs       = require('fs');
const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateIndex(){

  const path          = `./templates/index.html`;
  const file          = fs.readFileSync(path, 'utf-8');

  fs.writeFile(`index.html`, file, 'utf-8');

  console.log(colors.magenta('Generating Index.html...'));

};
