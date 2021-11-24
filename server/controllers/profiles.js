const express = require("express");
const mongo = require('mongodb'); //database that will hold our posts
const models = require("../models/profiles");


const app = express.Router();


app
.get("/", (req, res, next)=>{

    models.getAll2().then(x=>res.send(x)).catch(next);
     
 
 })
.get("/:id", (req, res, next)=>{
    models.Get(req.params.id).then(x=>res.send(x))
    .catch(next)

    
})


.patch("/:id", (req, res, next) =>{
    models   .Update(req.params.id, req.body)
            .then( x=> res.send(x) )
            .catch(next) 
})
.post("/",(req,res,next)=>{

    models   .AddData(req.body)
    .then( x=> res.status(201).send(x) )
    .catch(next)
})


.post("/seed", (req, res, next) =>{
    models   .Seed()
            .then( x=> res.status(201).send("Created") )
            .catch(next)
})


module.exports = app;