/**
 * @name testMongoDB.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/testDB';

var insertData = function (db, callback) {
    //连接到表 book
    var collection = db.collection('book');
    //插入数据
    var data = [
        { bookId: 'bookId1', bookName: 'bookName1', bookFrontImage: 'bookFrontImage1', bookBackImage: 'bookBackImage1'},
        { bookId: 'bookId2', bookName: 'bookName2', bookFrontImage: 'bookFrontImage2', bookBackImage: 'bookBackImage2'},
    ];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});
