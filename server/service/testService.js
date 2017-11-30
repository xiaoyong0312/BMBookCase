/**
 * @name testService.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const BookService = require('./book-service');

/*class testService {

    test_getInfoList() {
        console.log(`test_getInfoList()-->>/n`, BookService.default.getInfoList());
    }
}

exports.default = testService;*/

// BookService.create('bookId1', 'bookName1', 'bookFrontImage1', 'bookBackImage1')
console.log(`test_getInfoList()-->>\n`, BookService.default.getInfoList());



