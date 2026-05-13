const express = require("express");
const fs = require("fs");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false}));

app.use((req, res, next)=>{
    fs.appendFile('log.txt', `${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`, (err,data)=>{
        next();
    })
})

app.use((req, res, next)=>{
    // console.log("Middleware 2")
    // return res.end("hey");
    next();
})

app.get('/users' , (req ,res) => {
   const html = `
   <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
   </ul>
   `;
   res.send(html);
})

//REST API 
app.get('/api/users', (req ,res) => {
    return res.json(users);
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user);
})
.patch((req,res)=>{
    //Edit user with id
    res.json({status:'pending'})
})
.delete((req,res)=>{
    //Delete user with id 
    res.json({status:"pending"})
});



app.post('/api/users', (req, res) => {
   const body = req.body;
   users.push({...body, id: users.length + 1});
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err, data) => {
   return res.json({ status: "success", id: users.length});
   })
})


// app.patch('/api/users/:id', (req, res) => {
//    // TODO: Edit the user with ID
//    return res.json({ status: "pending"});
// });


// app.delete('/api/users/:id', (req, res) => {
//    // TODO: delete the user with ID
//    return res.json({ status: "pending"});
// });


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))