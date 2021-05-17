const express = require("express")
const router = express.Router()
const User = require("../models/User.model")

// Get all users
router.get("/", (req, res, next) => {
  User.find()
  .then(Users =>  res.status(200).json(Users))
  .catch(err => res.status(500).json(err))
})


router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id })
  .then(Users => res.status(200).json(Users))
  .catch(err => res.status(500).json(err))
})


module.exports = router
