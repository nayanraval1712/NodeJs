// we have to creat a pssword hasher and import the object form other file 
var http = require("http")
// import local moduel 
var storage = require("./mydb")
// creat a server 
var server = http.createServer(function (response, request) {
    console.log('resuest avi navi....')
    // creat a object 
    var data = new storage.data();
    data.insert(''),
        data.update(''),
        data.delete(''),
        data.select('')
})

server.listen(5000)
console.log('buddy im ready .....!')