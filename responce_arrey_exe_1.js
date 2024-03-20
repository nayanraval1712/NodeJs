var http = require('http')
var server = http.createServer(function (request, responce) {
    var url = request.url
    var data = {};
    if (url === '/monday') {
        data = JSON.stringify([
            {
                day: [
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/tuesday') {
        data = JSON.stringify([
            {
                day: [
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/wednesday') {
        data = JSON.stringify([
            {
                day: [
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/thursday') {
        data = JSON.stringify([
            {
                day: [
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/friday') {
        data = JSON.stringify([
            {
                day: [
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/saturday') {
        data = JSON.stringify([
            {
                day: [
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else if (url === '/sunday') {
        data = JSON.stringify([
            {
                day: [
                    'Amrut: 06:05 AM - 07:38 AM',
                    'Shubh: 07:38 AM - 09:11 AM',
                    'Labh: 09:11 AM - 10:43 AM',
                    'Amrut: 10:43 AM - 12:16 PM',
                    'Shubh: 12:16 PM - 01:49 PM',
                    'Labh: 01:49 PM - 03:22 PM',
                    'Amrut: 03:22 PM - 04:55 PM',
                    'Shubh: 04:55 PM - 06:28 PM',
                    'Labh: 06:28 PM - 08:01 PM'
                ]
            },
            {
                night: [
                    'Amrut: 08:38 PM - 10:11 PM',
                    'Shubh: 10:11 PM - 11:44 PM',
                    'Labh: 11:44 PM - 01:16 AM',
                    'Amrut: 01:16 AM - 02:49 AM',
                    'Shubh: 02:49 AM - 04:22 AM',
                    'Labh: 04:22 AM - 05:55 AM'
                ]
            }
        ]);
    }
    else {
        data= 'abe lawde sahi name dal ......'
    }
    responce.write(data);
    responce.end()
})
server.listen(5000);
console.log('server is reday to use  ..... ')