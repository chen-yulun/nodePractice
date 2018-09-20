let fs = require('fs');

// 异步读取文件
fs.readFile('read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})