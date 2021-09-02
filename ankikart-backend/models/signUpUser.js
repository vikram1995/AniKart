const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userId:{ type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    dateOfBirth:Date

})

const user = mongoose.model('userDetails', userSchema);

module.exports = user;

