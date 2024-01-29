const express = require('express')
var cors = require('cors') //first line
const chefs = require('./chefs-info.json');// -to initialize the JSON data
const app = express()
const port = 3000
app.use(cors()) //2nd line

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

app.post('/booking-response',async(req,res)=>{

  const bookingRes = req.body;
  if(bookingRes){
    res.send("Thank you! Your Booking Request was accepted");
  } 
  res.send(true);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})