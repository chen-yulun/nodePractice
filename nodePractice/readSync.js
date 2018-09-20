let fs = require('fs');

// 同步读取文件
let data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);

// 错误处理
try {
    let data = fs.readFileSync('red.txt', 'utf-8');
    console.log(data);  
} catch (err) {
    console.log(err);
}