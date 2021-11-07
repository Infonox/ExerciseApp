const express = require("express");
const models = require("../models/users");

const app = express.Router();


app
.get("/", (req, res, next)=>{
    res.send(models.GetAll());

}).get("/:user_id", (req, res, next)=>{
    res.send(models.Get(req.params.user_id));

})
.post("/Login", (req,res,next) =>{
     models.Login(req.body.handle, req.body.password)
        .then(user =>{
            res.send(user);

        }) .catch(next)
      
        
    
})
.post("/register", (req,res,next) =>{
     const user=req.body;
     models.Add(req.body)
     .then(user => {
        res.status(201).send(user);

     }).catch(next)

        
       

    });

    


module.exports = app;