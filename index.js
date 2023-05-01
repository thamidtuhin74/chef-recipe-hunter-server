const express = require('express')
const chefs = require('./chefs-info.json');// -to initialize the JSON data
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Chef Server is running')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})