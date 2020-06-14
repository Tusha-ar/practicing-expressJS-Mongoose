const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 9999
const BlogSchema = require('./Schemas/schema')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//monogo connection
mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
})
const db = mongoose.connection
db.once("open",()=>console.log('db connected!!'))
db.on("error",(err)=>console.log(err))

app.post('/getBlog',(req,res)=>{
    const data = {
        Title : req.body.title,
        Author: req.body.author,
        date: Date(),
        Content: req.body.content
    }
    const newBlog = new BlogSchema(data)
    newBlog.save((err, doc)=>{
        if(err)
            console.log(err)
        res.send('blog uploaded!!!')
    })
})

app.get('/getBlog',async(req,res)=>{
    await BlogSchema.find()
        .then(blog=>res.send(blog))
})

app.listen(port, ()=>console.log(`Server is live on port ${port}`))