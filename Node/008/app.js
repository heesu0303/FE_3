const http = require('http');
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    // res.write('hello world');
    // 다크모드 시 검은색 배경임
    res.write('<h1>hello world</h1>');
    // 태그 사용하면 다크모드 해제
    res.end();
});

server.listen(8080); 