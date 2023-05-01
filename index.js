const express = require('express')
const chefs = require('./chefs-info.json');// -to initialize the JSON data
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Chef Server is running')
})

app.get('/chefs',(req, res)=>{
    res.send(chefs);//to display in screen
})

//display loaded data with dynamic link
app.get('/chefs/:id',(req, res)=>{
    //here we create  dynamic server link like : http://localhost:3000/chefs/4
const id = parseInt(req.params.id);
console.log('lets see  the chefs id ;' + id );
const chef  = chefs.find(chef => chef.id === id) || {}
res.send(chef);// dispay in screen
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})