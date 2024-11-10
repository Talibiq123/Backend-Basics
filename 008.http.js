const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write("Welcom to Our Home page");
//     res.end();
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Our Home Page.');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is our about page.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' }); // Set status to 404
        res.end('<h1>Page Not Found</h1>'); // Send 404 page content
    }
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
