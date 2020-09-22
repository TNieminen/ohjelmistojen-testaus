## Webpack building

### Build a dist file

```sh
npx webpack --entry ./index.js
```

### Get dependency analytics

```sh
npx webpack --entry ./index.js --mode development --profile --json > stats.json
```

you can analyze this json file [here](http://webpack.github.io/analyse/#modules)