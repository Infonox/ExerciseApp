const express = require("express");
const mongo = require('mongodb'); //database that will hold our posts
const models = require("../models/exercisedata");


const app = express.Router();
app
.get("/", (req, res, next)=>{

    models.getAll().then(x=>res.send(x)).catch(next);
     
 
 })
 .delete("/:id", (req, res, next) =>{
    models   .Delete(req.params.id)
            .then( x=> res.send({ deleted: x }) )
            .catch(next) 
})

 .get("/feed/:handle", (req, res, next) =>{
     models   .GetFeed(req.params.handle)
             .then( x=> res.send(x) )
             .catch(next)    
 })
 
 
 .post("/",(req,res,next)=>{
 
     models   .Add(req.body)
     .then( x=> res.status(201).send(x) )
     .catch(next)
   
     
   
     
 })

 
 .post("/seed", (req, res, next) =>{
     models   .Seed()
             .then( wx=> res.status(201).send("Created") )
             .catch(next)
 })
 
 
 module.exports = app;