const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateTravis(){

  const path          = `./templates/travis.yml`;
  const file          = fs.readFileSync(path, 'utf-8');

  fs.writeFile(`travis.yml`, file, 'utf-8');

  console.log(colors.magenta('Generating Travis config...'));
};
