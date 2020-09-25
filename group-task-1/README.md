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