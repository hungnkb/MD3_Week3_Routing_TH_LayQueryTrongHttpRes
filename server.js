const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let queryStringObj = parseUrl.query;
    res.end('Hello Node Js');
    console.log(queryStringObj);
})
server.listen(3000, () => {
    console.log('Server is running at localhost:3000')
})

