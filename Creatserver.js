var http = require("http"); // compersory requre this line and http is inbult moduel 

// creat a function for server 
var server = http.createServer(function(request,response){
    console.log("hey im trigger .......")
})

server.listen(5000)
console.log('buddy are you ready ?....')
