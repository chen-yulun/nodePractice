let fs = require('fs');

let text = 'hello, this is text';

// 异步写文件
fs.writeFile('write.txt', text, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})