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

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))