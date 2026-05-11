// const { log } = require('console');
// const fs = require('fs');

//Sync
// fs.writeFileSync('./test.txt','Hello World');

//Async
// fs.writeFile('./test.txt','Hello Youngmann',(err)=>{});

// const result = fs.readFileSync("./contacts.txt","utf-8")

// fs.readFile('./contacts.txt', 'utf-8',(err,result)=>{
//     if (err){
//         console.log('Error Youngmann',err);
//     }else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`)

// fs.cpSync("./test.txt","./copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile());
// fs.mkdirSync('my-docs')

const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

// console.log("1");

//Blocking...
// const result = fs.readFileSync('contacts.txt', 'utf-8');
// console.log(result);

//Non-Blocking...
// const result = fs.readFile('contacts.txt', 'utf-8',(err,result)=>{
//     // console.log(result);
// });

// console.log("2");
// console.log("3");
// console.log("4");

//Default Thread Pool Size = 4
// Max? = 8core CPU -> 8