const express = require('express');

const {connectMongoDb} = require ('./connection')

const userRouter = require("./routes/user")

const {logReqRes} = require('./middlewares')

const app = express()
const PORT = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>console.log('Mongodb connected'))

//Middleware -Plugin
app.use(express.urlencoded({extended:false}))
app.use(logReqRes('log.txt'));

//ROUTES
app.use("/api/users", userRouter);

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`))

