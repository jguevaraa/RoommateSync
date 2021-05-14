module.exports = {

  checkIfLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).json({ message: "user unauthorized" });
    }
  },
  // checkIfoggedOut: (req, res, next) => {
  //   if(req.isAuthenticated()){
  //     res.redirect('/private/profile');
  //   } else {
  //     next();
  //   }
  // },
}