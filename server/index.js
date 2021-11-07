
//const serveStatic = require('serve-static');
const express = require('express')
const app = express()



//const connectHistory = require('connect-history-api-fallback')
//app.use(connectHistory()) These 2 lines of code could also be used instead of .get(*) below

const path = require('path');
require('dotenv').config();
const port= process.env.PORT || 8080;

const usersController = require('./controllers/users')
const postsController =  require('./controllers/posts')

app

.use(express.json())
.use('/users', usersController)
.use('/posts', postsController)


//app.use(serveStatic(path.join(__dirname, '../docs'))); //another way of serving the ../docs folder to heroku
app.use('/', express.static(path.join(__dirname, '../docs')))

app.get('*',(req,res) => res.sendFile(path.join(__dirname, '../docs/index.html')))


app.use((err,req,res,next) =>{
    res.status(err.code || 500).send(err);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

