let fs = require('fs');

let rs = fs.createReadStream('stream.txt');

let ws = fs.createWriteStream('pipe.txt');

// 数据流连接
rs.pipe(ws);