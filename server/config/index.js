/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const path = require('path');
const fsExtra = require('fs-extra');

const config_dir = process.env.config_dir || __dirname;

let config = fsExtra.readJSONSync(path.resolve(config_dir, "config.json"));

exports.default = config;