#!/usr/bin/env node --harmony

const program = require('commander');
const package = require('./package.json');

const _addReactClass     = require('./lib/_addReactClass');
const _addReactHOC       = require('./lib/_addReactHOC');
const _startServer       = require('./lib/_startServer');
const _runTests          = require('./lib/_runTests');
const _buildProject      = require('./lib/_buildProject');
const _deployToGitHub    = require('./lib/_deployToGitHub');
const _npmVersion        = require('./lib/_npmVersion');
const _pushTags          = require('./lib/_pushTags');
const _rmBuild           = require('./lib/_rmBuild');
const _generateApp       = require('./lib/_generateApp');
const _generateDocs      = require('./lib/_generateDocs');
const _linkElements      = require('./lib/_linkElements');
const _generateTestPage  = require('./lib/_generateTestPage');
const _generateDOMRender = require('./lib/_generateDOMRender');
const _generateSolano    = require('./lib/_generateSolano');
const _generateTravis    = require('./lib/_generateTravis');
const _generateIndex     = require('./lib/_generateIndex');
const _install           = require('./lib/_install');
const _register          = require('./lib/_register');
const _generateComponent = require('./lib/_generateComponent');
const _linkArchetype     = require('./lib/_linkArchetype');



program
  .version(package.version)
  .option('-A, --app [appName]', 'Generate App using create-react-app', _generateApp)
  .option('-a, --arch [componentName]', 'Generate Component using component-archetype', _generateComponent)
  .option('-l, --linkarch [pathToArchetype]', 'Generate Component using component-archetype', _linkArchetype)
  .option('-C, --component [componentName]', 'Add a class based component', _addReactClass, program.full)
  .option('-c, --higher_order [componentName]', 'Add a higher order component', _addReactHOC)
  .option('-V, --npm_version [version]', 'Bump version in package.json and git', _npmVersion)
  .option('-T, --gen_test [pageName]', 'Generate test page', _generateTestPage)
  .option('-t, --test', 'Run unit tests', _runTests)
  .option('-d, --deploy', 'Deploy the project to GitHub Pages', _deployToGitHub)
  .option('-D, --docs [componentName]', 'Generate documentation page for component', _generateDocs)
  .option('-f, --full', 'Provide full boilerplate for React classes')
  .option('-s, --start', 'Start the application server', _startServer)
  .option('-b, --build', 'Build the project', _buildProject)
  .option('-B, --rm_build', 'Remove build directory', _rmBuild)
  .option('-P, --push_tags', 'Push tags to GitHub', _pushTags)
  .option('-R, --register', 'Register Component with Pearson Design Accelerator', _register)
  .option('-r, --dom [componentName]', 'Generate ReactDOM boilerplate', _generateDOMRender)
  .option('-E, --link_elements [pathToElements]', 'Link local copy of elements', _linkElements)
  .option('-Y, --solano', 'Generate solano ci boilerplate config', _generateSolano)
  .option('-y, --travis', 'Generate travis ci boilerplate config', _generateTravis)
  .option('-I, --index', 'Generate index ci boilerplate', _generateIndex)
  .option('-i, --install', 'Install project dependencies', _install)
  .parse(process.argv);
