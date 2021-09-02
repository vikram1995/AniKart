const express = require('express');
const user = require('../models/signUpUser');
var router = express.Router()
const User = require("../models/signUpUser")

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

  router.post('/', async function (req, res) {
    console.log("prams: ",req.body);
    
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userId = req.body.userId;
    let dateOfBirth = req.body.dateOfBirth;

    let userData = new User({
      userId : userId,
      firstName:firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth
    })

    await userData.save();
  

    const users = await User.count()
    console.log(users);
    res.send(users);
  })

  module.exports= router