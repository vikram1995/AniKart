const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 5000;
const version = require('./version');
const signUp = require('./routes/signUp');
const connectToDB = require('./dbConnections/dbConnection');
//connection to data dase

connectToDB();

app.get('/',function(req,res){
    res.send(version);
})
app.post('/test', function(req,res){
    res.send(req.body)
})
app.use('/signUp', signUp)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })