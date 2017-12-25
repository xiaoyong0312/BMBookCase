/**
 * @name testMongoDB.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

let MongoClient = require('mongodb').MongoClient;
let IP = ['localhost', '172.19.65.30'];
let DB_CONN_STR = `mongodb://${IP[1]}:27017/testDB`;

//MongoClient 方式测试 mongoDB；
MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("mongoDB 连接成功！");

    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});

// insert data
let insertData = function (db, callback) {
    let collection = db.collection('book');//连接到表 book
    //插入数据
    let data = [
        {bookId: 'bookId1', bookName: 'bookName1', bookFrontImage: 'bookFrontImage1', bookBackImage: 'bookBackImage1'},
        {bookId: 'bookId2', bookName: 'bookName2', bookFrontImage: 'bookFrontImage2', bookBackImage: 'bookBackImage2'},
    ];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};

// get data
let getData = (db, callback) => {
    let collection = db.collection('book');//连接到表 book
    let data = [];
};
