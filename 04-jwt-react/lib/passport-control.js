const passport = require('passport'),
			passportJWT = require("passport-jwt"),
			Strategy = require('passport-local').Strategy,
			JWTStrategy = passportJWT.Strategy,
			ExtractJWT = passportJWT.ExtractJwt
			User = require('../db/User')

// Local Strategy
passport.use(new Strategy( (username, password, done) => {
	User.findOne({username: username}, (err, user) => {

		// If any error
    if (err) { return done(err) }

		if (!user) {
			return done(null, false, {
				message: 'No user found.'
			})
		}

		user.login(password).then(() => {
			 return done(null, user)
		}).catch((err) => {
			return done(err, false, {
				message: 'Password not matched.'
			})
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
		return done(err, false, {
			message: 'Token not matched.'
		})
	})
}))

module.exports = passport
