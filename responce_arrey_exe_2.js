var http = require('http')
var server = http.createServer(function (request, responce) {
    var url = request.url
    var data = {};
    if (url === '/a+') {
        data = JSON.stringify([{
            name: 'A+',
            compatible: ['A+', 'A-', 'O+', 'O-']
        }
        ]);
    }
    else if (url === '/a-') {
        data = JSON.stringify([{
            name: 'A-',
            compatible: ['A-', 'O-']
        }
        ]);
    }
    else if (url === '/b+') {
        data = JSON.stringify([{
            name: 'B+',
            compatible: ['B+', 'B-', 'O+', 'O-']
        }
        ]);
    }
    else if (url === '/b-') {
        data = JSON.stringify([{
            name: 'B-',
            compatible: ['B-', 'O-']
        }
        ]);
    }
    else if (url === '/ab+') {
        data = JSON.stringify([{
            name: 'AB+',
            compatible: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-']
        }
        ]);
    }
    else if (url === '/ab-') {
        data = JSON.stringify([{
            name: 'AB-',
            compatible: ['AB-', 'A-', 'B-', 'O-']
        }
        ]);
    }
    else if (url === '/o+') {
        data = JSON.stringify([{
            name: 'O+',
            compatible: ['O+', 'O-']
        }
        ]);
    }
    else if (url === '/o-') {
        data = JSON.stringify([{
            name: 'O-',
            compatible: ['O-']
        }
        ]);
    }
    else {
        data = 'sorry invelid ......'
    }
    responce.write(data);
    responce.end()
})
server.listen(5000);
console.log('server is reday to use  ..... ')