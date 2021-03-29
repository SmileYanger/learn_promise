/**
 * 封装一个函数mineReadFile 读取文件内容
 * 参数： path 文件路径
 * 返回： Promise对象
 */
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path,(err, data) => {
            //判断
            if(err) reject(err)
            //成功
            resolve(data)
        })
    })
}

mineReadFile('./data/content.txt').then(
    data => {
        console.log(data.toString())
    }, code => {
        console.log(code)
    }
)