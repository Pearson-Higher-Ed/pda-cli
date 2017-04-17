const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _linkElements(pathToElements){

  // cache current location
  const currentLocation = __dirname;

  // navigate to elements and run: sudo npm link
  exec(`cd ${pathToElements} && sudo npm link`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  // navigate to current project and run: npm link pearson-elements
  exec(`cd ${currentLocation} && npm link pearson-elements`);

  console.log(colors.magenta('Linking local copy of elements at:', pathToElements));
};
