const fs = require('fs');
fs.readFile('./data/content.txt', (err, data) => {
    //如果出错，则抛出错误
    if(err) throw err;
    console.log(data.toString())
})
 //用Promise封装
 const p = new Promise((resolve, reject) => {
    fs.readFile('./data/content.txt', (err, data) => {
        //如果出错，则抛出错误
        if(err) reject(err);
        resolve(data.toString())
    })
 });
 p.then(value => {
     console.log(value)
 }, reason => {
     console.log(reason)
 })