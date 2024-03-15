// we have to creat a pssword hasher and import the object form other file 
var http = require("http")
// import local moduel 
var con = require("./myconnection")
// creat a server 
var server = http.createServer(function(response,request){
console.log('resuest avi navi....')
console.log(con.database)
console.log(con.password)
console.log(con.username)
console.log(con.portno)
console.log(con.server)
})

server.listen(5000)
console.log('buddy im ready .....!')