const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const User = require('../models/User.model');
const router = express.Router();
const uploader = require('../configs/cloudinary.config');


router.get('/profile', checkIfLoggedIn, (req, res, next) => {
  res.render('profile', { recipes, user:req.user });
})

router.put('/profile/edit', uploader.single('photo'), (req, res, next) => {
  console.log(req.file);
  User.findOneAndUpdate({ ...req.body, photo: req.file ? req.file.path : req.user.photo }, { new: true })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(500).json(error))
})


router.get("/profile/favorites/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id, user: req.user.id  })
  .then(todo => res.status(200).json(todo))
  .catch(err => res.status(500).json(err))
})

router.delete("/profile/favorites/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOneAndRemove({ _id: id, user: req.user.id  })
  .then(() => res.status(200).json({ message: `${id} deleted`}))
  .catch(err => res.status(500).json(err))
})

module.exports = router;