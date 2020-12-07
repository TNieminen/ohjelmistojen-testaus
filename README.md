## Assignment doc

Can be found [here](https://docs.google.com/document/d/1P_dZxKKV-0d_avjU_wF0Ljvf-Es282P-83yM2SDHofs/edit?usp=sharing)


## Getting started

1. Make sure you have Node >= 12
2. Run yarn install in the root to install dependencies
3. You can lint our ./src code with `yarn lint`, or you can make you IDE to lint on save, but that's a separate setup (recommended)
4. You can add tests to ./src/tests and run them with `yarn test`

## Repo Structure

- ./assignment/ contains the original testable source code, do not change it
- ./src/utils contains tools that can be helpful for completion of the project
- ./src/tests contains all the tests that are run againts files in ./assignment/*.js
- .eslintingore, .eslintrc.yml and .prettierrc configure linting
- jest.config.js defines settings for our tests

## Analysis Tools

### Build a dist file

```sh
npx webpack --entry ./src/utils/bundle-assignment.js
```

### Get dependency analytics

```sh
npx webpack --entry ./src/utils/bundle-assignment.js --mode development --profile --json > stats.json
```

you can analyze this json file [here](http://webpack.github.io/analyse/#modules)


# Resources

https://www.youtube.com/watch?v=Af4M8GMoxi4

### pairwise testing

https://www.softwaretestinghelp.com/what-is-pairwise-testing/


# Testing strategy proposal

I've set up an interesting setup to test `isBoolean.js` at `isBoolean.test.js`.
I'm using an env variable and the file `testController.js` to define whether
or not to mock the imported modules. This way we can either run the same tests
in totally insulated unit environment or in an integration environment. Whaddayathink?

You can try running this by doing:
`yarn unit test` and `yarn integration-test`

# Coveralls

https://github.com/nickmerwin/node-coveralls
https://github.com/Ethan-Arrowood/harperdb-connect/blob/master/.travis.yml

## Notes

Since the library references [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
at Ecmascript 2016 this is the support level of this library e.g. ES7

Node support table https://node.green/