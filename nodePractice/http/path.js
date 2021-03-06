let
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

let root = path.resolve(process.argv[2] || '.');

console.log(root);  // E:\代码练习\node-git\nodePractice\http

// 创建服务器:  请求url:http://localhost:8089/index.html
let server = http.createServer( (request, response) => {
    // 获得URL的path，类似 '/index.html'
    let pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 'E:\代码练习\node-git\nodePractice\http':
    let filepath = path.join(root, pathname);
    console.log(11,filepath)  // 'E:\\代码练习\\node-git\\nodePractice\\http\\index.html'
    // 获取文件状态:
    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8089);