/**
 * util.promisify方法
 */
//1. 引入util模块
const util = require('util');
//2. 引用fs模块
const fs = require('fs');
//3. 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('./data/content.txt').then(data => {
    console.log(data.toString())
},
    code => {
        console.log(code)
    }
)