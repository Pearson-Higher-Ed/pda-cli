const { exec } = require('child_process');
const colors   = require('colors');
const fs       = require('fs');

module.exports = function _generateDOMRender(componentName){

  const path          = `./templates/DOMRender.js`;
  const file          = fs.readFileSync(path, 'utf-8');
  const processedFile = file.replace(/componentName/g, componentName);

  fs.writeFile(`${componentName}DOMRender.js`, processedFile, 'utf-8');

  console.log(colors.magenta('Generating ReactDOM Render Component...'));
};
