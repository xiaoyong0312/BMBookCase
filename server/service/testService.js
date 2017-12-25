/**
 * @name testService.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const BookService = require('./book-service');
const mongoose = require('mongoose');

const config = require('../config');

/*class testService {

    test_getInfoList() {
        console.log(`test_getInfoList()-->>/n`, BookService.default.getInfoList());
    }
}

exports.default = testService;*/

// console.log(`BookService-->>`, BookService);



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

BookService.default.create('bookId_Three', 'bookName_Three', 'bookFrontImage_Three', 'bookBackImage_Three');
// console.log(`test_getInfoList()-->>\n`, BookService.default.getInfoList());


