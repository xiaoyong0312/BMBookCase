/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const express = require('express');
const api = require('./api');

const router = express.Router();

// api请求允许跨域 | Authorization 验证
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS')
        return res.status(200).end(); //.end() 加快响应速度
    next();
});

// 提供的 api 接口
router.use('/api', api.default);

// 首页
router.get('/', (req, res) => res.render('index', {message: 'BMBookCase service running...'}));
// router.post('/views/app.html', (req, res) => console.log(`/views/app.html-->>`)); // Error
// router.post('/', (req, res) => res.render('index', {message: 'BMBookCase service running...'})); // Error

exports.default = router;