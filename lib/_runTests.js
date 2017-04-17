const { exec } = require('child_process');
const colors   = require('colors');

module.exports = function _runTests(){
  
  exec('jest --coverage', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  console.log(colors.green('Running Unit Tests...'));
};
