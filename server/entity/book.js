/**
 * @name book.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookId: {"type": String, "required": true},
    bookName: String,
    bookFrontImage: String,
    bookBackImage: String,
}, {timestamps: true});

BookSchema.index({bookId: 1}, {unique: true});
exports.default = mongoose.model('books', BookSchema, 'book');