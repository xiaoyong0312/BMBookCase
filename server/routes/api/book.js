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
router.get('/getBookInfoList', (req, res, next) => {
    (async () => {
        try {
            let bookInfoList = await BookService.default.getInfoList();

            commonReturn('json', res, bookInfoList);
            // return res.status(200).json(bookInfoList);
        } catch (error) {
            console.log(`/getBookInfoList --error:${error}`);
            commonReturn('fail', res, {});
        }
    })();
});

/**
 * 根据 bookId 获取 book 信息；
 */
router.get('/getBookInfoByBookId', (req, res, next) => {
    (async () => {
        let {bookId} = req.query;
        try {
            let bookInfo = await BookService.default.getInfo('bookId', bookId);

            commonReturn('json', res, bookInfo);
            // return res.status(200).json(bookInfo);
        } catch (error) {
            console.log(`/getBookInfoByBookId --bookId:${bookId} --error:${error}`);
            commonReturn('fail', res, {});
        }
    })();
});

/**
 * 根据 bookName 获取 book 信息；
 */
router.get('/getBookInfoByBookName', (req, res, next) => {
    (async () => {
        let {bookName} = req.query;
        try {
            let bookInfo = await BookService.default.getInfo('bookName', bookName);

            commonReturn('json', res, bookInfo);
            // return res.status(200).json(bookInfo);
        } catch (error) {
            console.log(`/getBookInfoByBookName --bookName:${bookName} --error:${error}`);
            commonReturn('fail', res, {});
        }
    })();
});

/**
 * create a book 信息；
 */
router.get('/addBookInfo', (req, res, next) => {
    (async () => {
        let {bookName, bookFrontImage, bookBackImage} = req.query;
        try {
            await BookService.default.create(null, bookName, bookFrontImage, bookBackImage);
            commonReturn('ok', res, {});
        } catch (error) {
            console.log(`/addBookInfo --bookName:${bookName} --error:${error}`);
            commonReturn('fail', res, {});
        }
    })();
});

/**
 * update a book 信息；
 */
router.get('/updateBookInfo', (req, res, next) => {
    (async () => {
        let {bookId, bookName, bookFrontImage, bookBackImage} = req.query;
        try {
            await BookService.default.updateInfo(bookId, {bookName: `${bookName}`});
            commonReturn('ok', res, {});
        } catch (error) {
            console.log(`/updateBookInfo --bookName:${bookName} --error:${error}`);
            commonReturn('fail', res, {});
        }
    })();
});

/**
 * 通用返回方法；
 * @param type
 * @param res
 * @param data
 */
commonReturn = (type, res, data) => {
    switch (type) {
        case 'fail':
            return res.status(201).json({data: {}, msg: '操作失败', recode: '201', result: 'fail'});
            break;
        case 'json':
            return res.status(200).json(data);
            break;
        case 'ok':
            return res.status(200).json({data: {}, msg: '操作成功', recode: '200', result: 'ok'});
            break;

        default:
            return res.status(200).json(data);
            break;
    }
};

exports.default = router;