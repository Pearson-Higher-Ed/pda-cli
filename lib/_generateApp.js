const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _generateApp(appName){
  exec('sudo npm install -g create-react-app');
  exec(`create-react-app ${appName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  console.log(colors.magenta(`App ${appName} generated...`));
}
