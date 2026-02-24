const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./model/post.model')
const cors = require('cors')

const app = express()
app.use(cors()) // ye middleware frontend aur backend ke beech me communication allow karta hai
app.use(express.json()) // raw data ko parse karne ke liye ye middleware use hota hai

const upload = multer({Storage: multer.memoryStorage})

app.post('/create-post',upload.single("image"),async (req,res)=> {
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created Successfully",
        post
    })
})

app.get('/posts', async (req,res)=> {
    const posts = await postModel.find()
    return res.status(201).json({
        message: "Posts fetched successfully",
        posts
    })
})


module.exports = app;