const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateComponent(componentName){
  exec('git clone https://github.com/Pearson-Higher-Ed/component-archetype.git');
  console.log(colors.magenta(`Component ${componentName} generated...`));
}
