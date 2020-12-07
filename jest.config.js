/**
 * @description Jest Config, see related docs
 * @see https://jestjs.io/docs/en/configuration
 */
module.exports = {
  moduleNameMapper: {
    // here you can map module imports
    // for instance if you don't want to do ./internal/some-module.js
    // you could just map that to @/some-module.js
    '^@/(.*)$': '<rootDir>/src/assignment/src/$1',
  },
  // list of extensions the modules use
  moduleFileExtensions: ['js','json'],
  // if your modules include functionalities that node does not support yet
  // we can use babel to transpile the code
  // because we only have imports we should be fine
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/jest.transformer.js'
  // },
  // 
  collectCoverage: true,
  
  // decide where to collect coverage from
  collectCoverageFrom: [
    '<rootDir>/src/assignment/src/*.js'
  ],

  // you might need to run separate setup scripts for the env to work
  // you might for instance want to mock fetch globally with document.fech = require('jest-fetch-mock')
  // setupFiles: ['./jest.setup.js', 'jest-canvas-mock', 'jest-useragent-mock', 'window-resizeto/polyfill'],

  // what files to match for tests
  testMatch: ['<rootDir>/(**/**/**.(test).(js|jsx|ts|tsx))', '(**/**/**.(test).(js|jsx|ts|tsx))'],
  // testMatch:['<rootDir>/src/src/tests/drop.test.js']
  // By default node_modules are not transpiled by jest
  // You can add things to the regexp pattern to ignore
  // Or you can add items after the ?! to force transpilation. Sometimes some modules
  // are distributed as untranspiled, so this way you can force them to be transpiled
  // transformIgnorePatterns: ['node_modules/(?!(@babel/runtime/|@myRepo/my-non-transpiled-module))']
}
