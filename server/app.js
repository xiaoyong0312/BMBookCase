/**
 * @name app.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config');
const routers = require('./routes');

const app = express();

module.exports = app;

// Use native promises
mongoose.Promise = global.Promise; // fuck!!!
mongoose.connect(`mongodb://${config.default.DATABASE.URI}`, config.default.DATABASE.OPTION)
    .then(() => {
        logger_1.default.info(`======================================================`);
        logger_1.default.info(`数据库连接成功`);
        logger_1.default.info(config.default.DATABASE.URI);
        logger_1.default.info(`======================================================`);
    })
    .catch(error => console.log(error));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// 服务 根路由；
app.use(routers.default);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handler
app.use((err, req, res, next) => {
    // 渲染错误页面
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

