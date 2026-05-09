const { log } = require('console');
const fs = require('fs');

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
fs.mkdirSync('my-docs')
