import { createServer } from 'node:http';

const server = createServer((req, res) => {
    const reqUrl = new URL(`https://${process.env.HOST ?? 'localhost'}${req.url}`);
    console.log(reqUrl.pathname);
    switch (reqUrl.pathname) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><body><h1>Hi, users!</h1></body></html>`);
            break;
        case '/api/data':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Hello, API!' }));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

const PORT = process.env.PORT || 3000;
