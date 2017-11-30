/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const express = require('express');
const book = require('./book');

const router = express.Router();

router.use('/book', book.default);

exports.default = router;