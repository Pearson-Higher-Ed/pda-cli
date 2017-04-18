const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _linkArchetype(pathToArchetype){

  // cache current location
  const currentLocation = __dirname;

  // navigate to component-archetype and run: sudo npm link
  exec(`cd ${pathToArchetype} && sudo npm link`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  // navigate to current project and run: npm link component-archetype
  exec(`cd ${currentLocation} && npm link component-archetype`);

  console.log(colors.magenta('Linking local copy of component-archetype at:', pathToArchetype));
};
