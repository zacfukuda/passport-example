const passport = require('passport'),
			Strategy = require('passport-local').Strategy,
			User = require('../db/User')

// Local Strategy
passport.use(new Strategy( (username, password, done) => {
	User.findOne({username: username}, (err, user) => {
    
    // If any error
    if (err) { return done(err) }

    // If no user found
    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    // Password not matched
    if (user.password != password) {
      return done(null, false, {
        message: 'Password not matched.'
      })
    }

    return done(null, user)
  })
}))

// Session
passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( (id, done) => {
  User.findById(id, (err, user) => {
    if (err) { return done(err) }
    done(null, user)
  })
})

module.exports = passport
