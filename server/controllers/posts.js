const express = require("express");
const mongo = require('mongodb'); //database that will hold our posts
const models = require("../models/posts");


const app = express.Router();


app
.get("/", (req, res, next)=>{

   models.getAll().then(x=>res.send(x)).catch(next);
    

})
.get("/wall/:handle", (req, res, next) =>{
    models   .getWall(req.params.handle)
            .then( x=> res.send(x) )
            .catch(next)    
})
.get("/feed/:handle", (req, res, next) =>{
    models   .getFeed(req.params.handle)
            .then( x=> res.send(x) )
            .catch(next)    
})
.get("/search", (req, res, next)=>{
    models.Search(req.query.q).then(x=>res.send(x))
    .catch(next)

})
.get("/:id", (req, res, next)=>{
    models.Get(req.params.id).then(x=>res.send(x))
    .catch(next)

    
})
.post("/",(req,res,next)=>{

    models   .Add(req.body)
    .then( x=> res.status(201).send(x) )
    .catch(next)
  
    
  
    
})
.patch("/:id", (req, res, next) =>{
    models   .Update(req.params.id, req.body)
            .then( x=> res.send(x) )
            .catch(next) 
})
.delete("/:id", (req, res, next) =>{
    models   .Delete(req.params.id)
            .then( x=> res.send({ deleted: x }) )
            .catch(next) 
})
.post("/seed", (req, res, next) =>{
    models   .Seed()
            .then( x=> res.status(201).send("Created") )
            .catch(next)
})


module.exports = app;