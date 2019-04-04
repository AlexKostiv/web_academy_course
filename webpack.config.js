const path = require('path');
const baseConfig = require('./src/hw_1/config/base');
const devConfig = require('./src/hw_1/config/dev');
const prodConfig = require('./src/hw_1/config/prod');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const env = process.env.NODE_ENV;

const _path = __dirname;

let config = baseConfig(_path);

if (env === "development") {
    config = devConfig(config, path.normalize(path.join(_path, "/build")));
}

if (env === "production") {
    config = prodConfig(config, path.normalize(path.join(_path + "/build")));
}

if (env === "publish") {
  config = prodConfig(config, _path + "/docs");
}


module.exports = config;