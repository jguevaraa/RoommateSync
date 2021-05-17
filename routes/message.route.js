const express = require('express');
const Message = require('../models/message.model');
const User = require('../models/User.model');
const router = express.Router();


router.post("/message/:id", (req, res, next) => {
  const {message} = req.body
  const to = req.params.id
  const from = req.user._id
Message.create({message, to, from })
.then(createMessage => { 
  User.findOneAndUpdate({_id:to}, {$push:{"messageRecive":createMessage}}, {new:true})
  .then(user => {
    User.findOneAndUpdate({_id:from}, {$push:{"messageSend":createMessage}}, {new:true})
    .then(createMessage => res.status(200).json(createMessage))
    .catch(err => res.status(500).json(err))

  })
  .catch(err => res.status(500).json(err))
})
.catch(error => res.status(500).json(error))
})

