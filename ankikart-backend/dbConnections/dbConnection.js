const  mongoose = require('mongoose');
const config = require("../config/config");
//es6 promises

function connectToDB(){
        mongoose.Promise = global.Promise
    //connect to mongoDB
    console.log("db link: ",config.dbHost)
    mongoose.connect(config.dbHost);

    mongoose.connection.once('open',function(){
        console.log("connection with database has been made");
    }).on('error',function(error){
        console.log("Connection Error", error)
    })
}

module.exports = connectToDB
