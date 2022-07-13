const http = require('http');
const port = 3000
const fs = require('fs')
const errorPage = '<h1>Page Not Found</h1>'
const file = (file, res) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write(errorPage)
        }else {
            res.write(data)
        }
        res.end()
    })
}

// Create a local server to receive data from
http.createServer((req, res) => {
    const url = req.url
    res.writeHead(200, {'content-type':'text/html'});
    switch (url) {
        case '/':
            file('./index.html', res)
            break;
        case '/about':
            file('./about.html', res)
            break;
        case '/contact':
            file('./contact.html', res)
            break;
        default:
            file('./error.html', res)
            break;
    }
}).listen(port,() => {
    console.log(`Server is listening on http://localhost:${port}`);
});