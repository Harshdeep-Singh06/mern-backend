const fs = require("fs");

// Sync... Call
// fs.writeFileSync('./test.txt', 'Hello world');

// Async... Call
// fs.writeFile('./test.txt', 'Hello world', (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// const result = fs.readFile("./contacts.txt", "utf-8",(err, result)=>{
//     if(err){
//         console.log("Error", err)
//     }else{
//         console.log(result)
//     }
// })


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `Hey there\n`);
// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);
// fs.cpSync('./test.txt','./copy.txt')
// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync('my-docss/a/b',{recursive:true})