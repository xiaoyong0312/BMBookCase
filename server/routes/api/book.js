/**
 * @name book.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const express = require('express');
const BookService = require('../../service/book-service');

const router = express.Router();

/**
 * 获取 book list 信息；
 */
router.post('/getBookInfoList', (req, resp, next) => {
    (async () => {
        try {
            let bookInfoList = await BookService.default.getInfoList();
            console.log(`bookInfoList-->>${bookInfoList}`);
            resp.status(200).json(bookInfoList);
        } catch (error) {
            console.log(`/getBookInfoList --error:${error}`);
        }
    })();
});

/**
 * 根据 bookId 获取 book 信息；
 */
router.post('/getBookInfoByBookId', (req, resp, next) => {
    (async () => {
        let {bookId} = req.body;
        try {
            await BookService.default.getInfo('bookId', bookId);
        } catch (error) {
            console.log(`/getBookInfoByBookId --bookId:${bookId} --error:${error}`);
        }
    })();
});

/**
 * 根据 bookName 获取 book 信息；
 */
router.post('/getBookInfoByBookName', (req, resp, next) => {
    (async () => {
        let {bookName} = req.body;
        try {
            await BookService.default.getInfo('bookName', bookName);
        } catch (error) {
            console.log(`/getBookInfoByBookName --bookName:${bookName} --error:${error}`);
        }
    })();
});

/**
 * create a book 信息；
 */
router.post('/addBookInfo', (req, resp, next) => {
    (async () => {
        let {bookName, bookFrontImage, bookBackImage} = req.body;
        try {
            await BookService.default.create(null, bookName, bookFrontImage, bookBackImage);
        } catch (error) {
            console.log(`/addBookInfo --bookName:${bookName} --error:${error}`);
        }
    })();
});

/**
 * update a book 信息；
 */
router.post('/updateBookInfo', (req, resp, next) => {
    (async () => {
        let {bookId, bookName, bookFrontImage, bookBackImage} = req.body;
        try {
            await BookService.default.updateInfo(bookId, {});
        } catch (error) {
            console.log(`/updateBookInfo --bookName:${bookName} --error:${error}`);
        }
    })();
});

exports.default = router;