require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');

const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

// Session config + Passport
require('./configs/session.config')(app);
require('./configs/passport.config')(app);
// Routes 

const index = require('./routes/index');
const authRouter = require('./routes/auth.routes');
const privateRouter = require('./routes/private.routes');
const usersRouter = require('./routes/users.routes');
app.use('/api/', index);
app.use('/api/auth', authRouter);
app.use('/api/private', privateRouter);
app.use('/api/users', usersRouter);

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});


module.exports = app;