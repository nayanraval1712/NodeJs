var http = require("http")
// import local mpodual 
var next = require("./myexport1")
var server = http.createServer(function(response,request){
console.log(next.getDate())
console.log(next.getTime())
console.log(next.getDateTime())
})

server.listen(5000)
console.log('buddy im ready .....!')