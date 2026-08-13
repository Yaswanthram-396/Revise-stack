// const http = require('node:http');
import http from 'node:http';

const server = http.createServer((req, res) => {
    // What should happen here?
    if(req.method==='GET' && req.url==='/'){
        res.statusCode=200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({value:"new"}));
    }
    else if(req.method==='GET' && req.url==='/tasks'){
        res.statusCode=200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Tasks");
    }
    else{
        res.statusCode=404;
        res.setHeader("Content-Type", "text/plain");
        res.end("No Endpoint");
    }
});

server.listen(3000, () => {
    console.log("connected");
    // What should happen when the server starts?
});