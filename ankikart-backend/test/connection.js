
const  mongoose = require('mongoose');
//es6 promises

mongoose.Promise = global.Promise
//connect to mongoDB

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log("connection with database has been made");
}).on('error',function(error){
    console.log("Connection Error", error)
})