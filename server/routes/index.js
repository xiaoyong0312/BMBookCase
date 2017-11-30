/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const express = require('express');
const api = require('./api');

const router = express.Router();

router.use('/api', api.default);

exports.default = router;