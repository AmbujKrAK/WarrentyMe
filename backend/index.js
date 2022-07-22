const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
const app = express()

connectToMongo();

app.use(cors())
app.use(express.json());
//available routes

app.use('/api/auth', require('./routes/auth'))
app.use('/', require('./routes/jobs'))

app.get("/", (req, res) => {
    res.send("Working");
  });
  
app.listen(5000, ()=>{
    console.log(`Adimn Portal Listening at port 5000`)
})