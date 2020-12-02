//https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195
const http  = require('http');
// const url   = require('url');
// const fs    = require('fs');

http.createServer((request, response) => {
    // const path = url.parse(request.url, true).pathname;     // url에서 경로추출추출
    return request
        .on('error', (err) => {     // request에 에러 존재
            console.log(err);
        })
        .on('data', (data) => {     // request에 데이터 존재
            console.log(data);
        })
        .on('end', () => {          // request의 데이터를 전부 받아졌으면 사실상 response시작?
            response.on('error', () => { 
                console.log(err);
            });
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.write(' hello\n');
            response.end(' world ! ');
        });
}).listen(3000);