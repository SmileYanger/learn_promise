function sendAjax(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.code)
                }
            }
        }
    })
}
sendAjax("GET", './data/content.txt').then(data => {
    console.log(data+'第一次调用')
}, code => {
    console.log(code)
}).then((value) => {
    console.log(value +'第二次调用')
}).then((value) => {
    console.log(value+'第三次调用')
})

async function getData(){
    try {
        const data = await sendAjax("GET", './data/content.txt');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getData()