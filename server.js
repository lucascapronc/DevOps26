const http = require('http');

const PORT = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(req.headers, null, 2));
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        error: 'Not Found'
    }));
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});