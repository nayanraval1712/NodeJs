var http = require('http')
var server = http.createServer(function (request, responce) {
    var url = request.url
    var data = {};
    if (url === '/movie') {
        data = JSON.stringify([
            {
                name: 'iPhone 13',
                releaseDate: 'September 24, 2021',
                languageType: 'Swift'
            },
            {
                name: 'Samsung Galaxy S21',
                releaseDate: 'January 29, 2021',
                languageType: 'Java (Android)'
            },
            {
                name: 'Google Pixel 6',
                releaseDate: 'October 28, 2021',
                languageType: 'Java (Android)'
            },
            {
                name: 'OnePlus 9 Pro',
                releaseDate: 'March 23, 2021',
                languageType: 'Java (Android)'
            }
        ]);
    }
    responce.write(data);
    responce.end()
})
server.listen(5000);
console.log('hey chutiye ..... ')