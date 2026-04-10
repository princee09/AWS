const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Allow anyone to fetch from this API
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle the preflight check
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    // Send the actual response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello! You reached the backend app running on port: ${port}\n`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});