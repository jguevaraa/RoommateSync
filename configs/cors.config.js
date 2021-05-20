const cors = require('cors');

module.exports = (app) => {
  app.use(
    cors({
      credentials: true, 
      origin: [process.env.PUBLIC_DOMAIN,
      'http://roommsync.herokuapp.com',
      'https://roommsync.herokuapp.com']
    })
  )
}