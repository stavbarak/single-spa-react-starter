const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const path = require('path');


module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "",
    projectName: "",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'system',
    },

    mode: 'production',
    devtool: 'sourcemap',
    module: {
      rules: 
        [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          }
        ]
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      disableHostCheck: true,
      sockHost: 'localhost',
      sockPort: '8080'
    }

    
    });
};
