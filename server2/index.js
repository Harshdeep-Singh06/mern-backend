const http = require("http")
const fs = require('fs');

const myServer = http.createServer((req, res)=>{
    // console.log(req.headers)
    // console.log(req)
    // console.log("New req recieve");
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recieved\n`
    fs.appendFile('log.txt',log,(err, data)=>{
        switch(req.url){
            case '/': 
            if(req.method === 'GET') res.end("Homepage");
            break
            case '/about': res.end("Hey I am Batman")
            break
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are you result for" + search)
                break
            case '/SignUp':
            if(req.method === 'GET') res.end("This is a sign up form")
            else if(req.method === 'POST'){
                    // DB Query
                    res.end("Success")
            }
                break;
            default:
                res.end("4O4 Not Found")
        }
    })
});

myServer.listen(8000, ()=>console.log("Server Started"))

