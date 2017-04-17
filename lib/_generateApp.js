const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateApp(appName){
  exec('npm install -g create-react-app');
  exec(`create-react-app ${appName}`);
  console.log(colors.magenta(`App ${appName} generated...`));
}
