var http = require('http');
var server = http.createServer(function (request, responce) {
    // accept reuest from url like '/'
    var url = request.url;
    // method to write data at 200 port 
    responce.writeHead(200, { 'content-type': 'text/html' });
    // we will return in output in html formate
    var output;
    if (url === '/') {
        // html coad write in '' 
        output = '<html><head></head><body><h1>Hello Nayan it is home</h1></body></html>'
    }
    else if (url === '/cart') {
        // html coad write in '' 
        output = '<html><head></head><body><h1>Hello Nayan it is cart section</h1></body></html>'
    }
    else if (url === '/payment') {
        // html coad write in '' 
        output = '<html><head></head><body><h1>Hello Nayan it is payment</h1></body></html>'
    }
    //  else {
    //     output = '<html><head></head><body><h1>Page not found</h1></body></html>';
    // }
    responce.write(output) // store varial in write method 
    responce.end();
})
server.listen(5000);
console.log('buddy im redy...')