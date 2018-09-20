let http = require('http');

let server = http.createServer((req, res) => {
    res.end('<h1>Hello world</h1>')
});

server.listen(9090);

console.log('Server is running')