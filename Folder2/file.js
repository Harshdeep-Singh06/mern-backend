// const math = require("./math");
// console.log(math);
// Modules

const fs = require("fs");

//Sync...
// fs.writeFileSync('./test.txt', 'HEy there');

//Async...
// fs.writeFile("./test.txt", "Hello Wolrd Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log('Error', err);
//     }else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", 'Hey There\n');


// fs.unlinkSync("./contacts.txt");

// console.log(fs.statSync("./test.txt"));
// fs.mkdirSync('my-docs/a', {recursive: true});

//Sync..Blocking..
// fs.writeFileSync('./test.txt', 'Hello there');

//Async..Non-Blocking Req..
// fs.writeFile('./test.txt', 'Hey there', (err)=>{});

const os = require('os');

console.log(os.cpus().length);