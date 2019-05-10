const passport = require('passport'),
			passportJWT = require("passport-jwt"),
			Strategy = require('passport-local').Strategy,
			JWTStrategy = passportJWT.Strategy,
			ExtractJWT = passportJWT.ExtractJwt
			User = require('../db/User')

// Local Strategy
passport.use(new Strategy( (username, password, done) => {
	User.findOne({username: username}, (err, user) => {
		if (err) { return done(err) }
		if (!user) { return done(null, false) }

		user.login(password).then(() => {
			 return done(null, user)
		}).catch((err) => {
			return done(err)
		})
	})
}))

// JWT
passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'jwt_secret'
}, (jwt_payload, done) => {
	User.findById(jwt_payload.id).then(user => {
		return done(null, user)
	}).catch(err => {
		console.log(err)
		return done(err)
	})
}))

// Since the app no longer uses session,
// We don’t need the code below
// 
// Session
// passport.serializeUser( (user, done) => done(null, user.id) )

// passport.deserializeUser( (id, done) => {
// 	User.findById(id, (err, user) => {
// 		if (err) { return done(err) }
// 		done(null, user)
// 	})
// })

module.exports = passport
