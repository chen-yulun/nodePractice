let fs = require('fs');

// 异步读取图片 
fs.readFile('simple.png', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString('utf-8'));
    }
})