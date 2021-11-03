

const express = require('express')
const app = express()


const connectHistory = require('connect-history-api-fallback')

const serveStatic = require('serve-static');
const path = require('path');
const port= process.env.PORT || 8080;




app.use(connectHistory())

app.use(serveStatic(path.join(__dirname, '../docs')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

