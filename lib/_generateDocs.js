const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateDocs(componentName){

  const path          = `./templates/ComponentDocPage.js`;
  const file          = fs.readFileSync(path, 'utf-8');
  const processedFile = file.replace(/componentName/g, componentName);

  fs.writeFile(`${componentName}DOMRender.js`, processedFile, 'utf-8');

  console.log(colors.magenta('Generating Component Documentation Page...', componentName));
};
