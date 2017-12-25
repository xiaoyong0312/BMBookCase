/**
 * @name book-service.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const Book = require('../entity/book');

class BookService {

    static async getInfoList() {
        return await Book.default.find({}, {'_id': 0, '__v': 0}) || {};
    }

    static async getInfo(type, paramter) {
        console.log(`type: ${type}, paramter: ${paramter}-->>`);
        paramter = `${paramter}`;
        if ('bookId' == type) {
            return await Book.default.findOne({bookId: paramter}, {'_id': 0, '__v': 0}) || {};
        } else if ('bookName' == type) {
            return await Book.default.findOne({bookName: paramter}, {'_id': 0, '__v': 0}) || {};
        }
    }

    static async create(bookId, bookName, bookFrontImage, bookBackImage) {
        return await Book.default.findOneAndUpdate({bookId: `${bookId}`},
            {bookId, bookName, bookFrontImage, bookBackImage},
            {upsert: true, "new": true});
    }

    static async updateInfo(bookId, data) {
        return await Book.default.findOneAndUpdate({bookId: `${bookId}`}, data, {upsert: true});
    }


}

exports.default = BookService;