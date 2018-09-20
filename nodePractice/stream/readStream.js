let fs = require('fs');

// 打开一个流:
let rs = fs.createReadStream('stream.txt', 'utf-8');

// data事件可能会有多次，每次传递的chunk是流的一部分数据
rs.on('data', (chunk) => {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', () => {
    console.log('END');
});

rs.on('error', (err) => {
    console.log('ERROR: ' + err);
});