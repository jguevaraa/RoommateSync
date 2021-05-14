const express = require("express")
const router = express.Router()
const User = require("../models/User.model")

// Get all users
router.get("/", (req, res, next) => {
  Users.find({ user: req.user.id })
  .then(Users =>  res.status(200).json(todos))
  .catch(err => res.status(500).json(err))
})


router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Users.findOne({ _id: id, user: req.user.id  })
  .then(Users => res.status(200).json(todo))
  .catch(err => res.status(500).json(err))
})


module.exports = router
