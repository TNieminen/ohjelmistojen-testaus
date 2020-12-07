module.exports = {
  /**
   * Babel polyfills missing javascript methods in a smart way that allows us to define which
   * browser we want to target for instance in a separate browserlist.rc file or in the package.json.
   * In our case looking at the testable library the "Highest" standard it abides by is ES7 and 
   * we will assume the code is then compatible with it's standards. This way we can polyfill
   * any expected ES7 features and test as if we were in an ES7 environment.
   */  
  
  presets: [
    [
      '@babel/preset-env', // https://babeljs.io/docs/en/babel-preset-env
      {
        targets: {
          node: 'current', // loads polyfills needed for current node version https://github.com/babel/babel-preset-env
        },
      },
    ],
  ],
}