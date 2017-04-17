const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateSolano(){

  const path          = `./templates/solano.yml`;
  const file          = fs.readFileSync(path, 'utf-8');

  fs.writeFile(`solano.yml`, file, 'utf-8');

  console.log(colors.magenta('Generating Solano config...'));
};
