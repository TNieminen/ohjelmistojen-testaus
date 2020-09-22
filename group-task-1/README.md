## Assignment doc

Can be found [here](https://docs.google.com/document/d/1P_dZxKKV-0d_avjU_wF0Ljvf-Es282P-83yM2SDHofs/edit?usp=sharing)

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