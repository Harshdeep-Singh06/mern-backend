const express = require('express');
const fs = require('fs')
// const users = require("./MOCK_DATA.json");
const mongoose = require('mongoose');

const app = express()
const PORT = 8000;

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>console.log("MongoDB Connected")).catch((err) => console.log("Mongo Error",err));

//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
        required: true,
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema);

//Middleware -Plugin
app.use(express.urlencoded({extended:false}))

// app.use((req,res,next)=>{
//     console.log("Hello from Middleware 1")
//     // return res.json({mgs:"Hello From Middleware 1"})
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Hello from Middleware 2")
//     res.json({mgs:"Hello from Middleware 2"})
// })

app.use((req,res,next)=>{
    fs.appendFile(
        "log.txt",
        `${Date.now()}:${req.ip} ${req.method}:${req.path}\n`,
        (err,data)=>{
            next();
        }

    )
})

//ROUTES

app.get('/users',async (req,res)=>{
    const allDbUsers = await User.find({});
    const html = `
    <ul>
     ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})

//REST API

app.get('/api/users', async(req,res)=>{
    const allDbUsers = await User.find({});
    res.setHeader("X-MyName","Harshdeep Singh") //Custom HEADER
    // Always use X to CUSTOM HEADERS
    // console.log(req.headers)
    return res.json(allDbUsers);
})

app.route("/api/users/:id")
.get(async(req,res)=>{
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    if (!user) return res.status(404).json({error:"user not found"});
    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({status:"Success"})
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"Success"})
})

app.post("/api/users",async (req,res)=>{
    const body = req.body;
    if(!body || !body.first_name ||!body.email|| !body.gender || !body.job_title ||! body.last_name){
        return res.status(400).json({msg: 'All field are required...'})
    }
    // // console.log('Body', body);
    // users.push({...body,id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"Success",id:users.length})
    // })
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    // console.log("result",result);
    return res.status(201).json({msg:"success"});
})


app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`))

