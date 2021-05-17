const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const User = require('../models/User.model');
const router = express.Router();
const uploader = require('../configs/cloudinary.config');
const { populate } = require('../models/User.model');


router.get('/profile', checkIfLoggedIn, (req, res, next) => {
  res.status(200).json(req.user);
})

router.put('/profile/edit', uploader.single('photo'), (req, res, next) => {
  console.log(req.file);
  User.findOneAndUpdate({_id:req.user._id},{ ...req.body, photo: req.file ? req.file.path : req.user.photo }, { new: true })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(500).json(error))
})

router.get("/profile/favorites", (req, res, next) => {
  User.findOne({_id:req.user._id})
  .populate("fav")
  .populate("messageRecive")
  .populate("messageSend")
  .then(user => res.status(200).json(user))
  .catch(error => res.status(500).json(error))
})

router.get("/profile/favorites/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id})
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json(err))
})

router.put("/profile/add/:id", (req, res, next) => {
  const {id} = req.params;
  User.findOneAndUpdate({ _id:req.user._id}, {$push:{"fav":id}}, {new:true})
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json(err))
}) 

router.put("/profile/remove/:id", (req, res, next) => {
  const {id} = req.params;
  User.findOneAndUpdate({ _id:req.user._id}, {$pull:{"fav":id}}, {new:true})
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json(err))
}) 


// router.delete("/profile/favorites/:id", (req, res, next) => {
//   const { id } = req.params;
//   User.findOneAndRemove({ _id: id, user: req.user.id  })
//   .then(() => res.status(200).json({ message: `${id} deleted`}))
//   .catch(err => res.status(500).json(err))
// })

module.exports = router;