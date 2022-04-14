require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
app = express()

const authRoute = require('./routes/auth')

mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser:true}
)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

//Middleware
app.use(express.json())

app.use('/api/user',authRoute)

app.get("/",(req,res)=>{
    res.send("Hello node")
})
app.listen(3000,()=>console.log("Server started"))