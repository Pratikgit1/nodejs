const http =require('http')
const login =require('./login')
const server =http.createServer((req,res)=>{

    console.log("request received")
    console.log(req)
        res.write("Sample response"+req)
    res.end()
});
console.log("request received")
server.listen(3002)

