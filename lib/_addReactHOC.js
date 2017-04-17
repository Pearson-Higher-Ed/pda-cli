const fs       = require('fs');
const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _addReactHOC(componentName, minimal){

  const minPath = `./templates/HigherOrderMin.js`;
  const path    = `./templates/HigherOrder.js`;

  const chosenPath = minimal ? minPath : path;

  const file = fs.readFileSync(chosenPath, 'utf-8');

  const processedFile = file.replace(/componentName/g, componentName);

  fs.writeFile(`${componentName}.js`, processedFile, 'utf-8');

  console.log(colors.magenta('Adding React Higher Order Component... ', componentName));

};
