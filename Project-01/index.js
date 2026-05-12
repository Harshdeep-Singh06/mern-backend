const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

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

app.route('/api/users:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user);
})
.patch((req,res)=>{
    //Edit user with id
    res.json({satus:'pending'})
})
.delete((req,res)=>{
    //Delete user with id 
    res.json({status:"pending"})
});



app.post('/api/users', (req, res) => {
   // TODO: Create new user
   return res.json({ status: "pending"});
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