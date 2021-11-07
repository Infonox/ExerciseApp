const express = require("express");
const models = require("../models/posts");

const app = express.Router();


app
.get("/", (req, res, next)=>{
    res.send(models.getAll());

})
.get("/search", (req, res, next)=>{
    res.send(models.Search(req.query.q));

})
.get("/:id", (req, res, next)=>{
    console.log(req.headers);
    res.send(models.Get(req.params.id));

    
})
.post("/",(req,res,next)=>{
  
    
  
    const newPost = models.Add(req.body)
    res.status(201).send(newPost);
})


module.exports = app;