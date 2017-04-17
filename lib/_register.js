const { exec } = require('child_process');
const colors   = require('colors');
const package  = require('../package.json');
const http     = require('http');

module.exports = function _register(componentName){

  // Check package.json for author, description, url, homepage, name, version...
  const postData = querystring.stringify({
    "name"         : package.name,
    "version"      : package.version,
    "description"  : package.description,
    "repository"   : package.repository,
    "author"       : package.author,
    "license"      : package.license,
    "keywords"     : package.keywords,
    "homepage"     : package.homepage,
    "contributors" : package.contributors
  });

  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();

  console.log(colors.green(`Registering ${componentName} with Pearson Design Accelerator...`));
};
