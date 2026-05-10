const http = require("http");
const fs = require("fs");
const url = require('url');

const myServer = http.createServer((req, res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const log = `${Date.now()}:${req.method} ${req.url} New Req Recieved\n`
    const myUrl = url.parse(req.url,true);
    // console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
     switch(myUrl.pathname){
        case "/":
           if (req.method == 'GET') res.end('HomePage')
            break;
        case "/about":
            const username = myUrl.query.myname
            res.end(`Youngmannn,${username}`);
            break;
        case "/search":
            const search = myUrl.query.search_query;
            res.end("Here are your results for " + search);
            break;
        case "/SignUp":
            if(req.method === 'GET') res.end('This is a sign up Form');
            else if(req.method === "POST"){
                //DB Queryy
                res.end("Success youngmannnn");
            }
            break;
        default:
            res.end("404 Not Found")
     }
    });
});

myServer.listen(8000,()=>console.log('Server Started!'));
