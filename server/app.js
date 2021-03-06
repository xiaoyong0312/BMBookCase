/**
 * @name app.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config');
const routers = require('./routes');

const app = express();

// Use native promises
mongoose.Promise = global.Promise; // fuck!!!
mongoose.connect(`mongodb://${config.default.DATABASE.URI}`, config.default.DATABASE.OPTION)
    .then(() => {
        console.log(`mongoose.connect().then()---->>>>`);

        // logger_1.default.info(`======================================================`);
        // logger_1.default.info(`数据库连接成功`);
        // logger_1.default.info(config.default.DATABASE.URI);
        // logger_1.default.info(`======================================================`);
    })
    .catch(error => console.log(error));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// load static resources ;
// favicon.ico
// app.use(favicon(path.join(__dirname, 'resources', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'resources')));

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// 服务 根路由；
app.use(routers.default);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    // console.log(`req-->>`, req) //, 'res-->>', res, 'next-->>', next);

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


module.exports = app;
