const fs       = require('fs');
const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _addReactClass(componentName, full) {
  const minPath = `./templates/ComponentClassMin.js`;
  const path    = `./templates/ComponentClass.js`;
console.log(full)
  const chosenPath = full ? path : minPath;

  const file = fs.readFileSync(chosenPath, 'utf-8');

  const processedFile = file.replace(/componentName/g, componentName);

  fs.writeFile(`${componentName}.js`, processedFile, 'utf-8');

  console.log(colors.magenta('Adding React Class Component... ', componentName));
}
