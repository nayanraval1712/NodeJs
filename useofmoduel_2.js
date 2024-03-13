// we have to creat a pssword hasher and import the object form other file 
var http = require("http")
// import local moduel 
var hasher = require("./passwordobject")
// creat a server 
var server = http.createServer(function(response,request){
console.log('resuest avi navi....')
// how to use moduel
// 1st we creart variable and store value in varible impoert form hasher...

var Setpassword = hasher.password('nayan')
console.log(Setpassword);
 var NewmatchPassword = hasher.matchPassword('brijesh','nayan')
 console.log(NewmatchPassword)
})

server.listen(5000)
console.log('buddy im ready .....!')