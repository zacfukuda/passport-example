const express = require('express'),
			passport = require('passport'),
			// ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn,
			jwt = require('jsonwebtoken'),
			User = require('../db/User'),
			router = express.Router()

/* API entrypoints */
// Singup
router.post('/signup', (req, res) => {
	var user = new User({
		username: req.body.username,
		password: req.body.password
	})

	user.save().then(() => {
		req.login(user, (err) => {
			if (err) {
				res.status(300).json({
					status: 'error',
					message: ''
				})
			}
			res.json({
				status: 'success',
			})
		})
	}).catch((err) => {
		res.status().json({})
	})
})

// Login
router.post('/login', passport.authenticate('local', {session: false}), (req, res) => {

	// Data stored in localStorage will persisit 
	// until the user remove it
	//
	// if ( req.body.remember ) {
	// 	req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000 // Expires in 1 day
	// } else {
	// 	req.session.cookie.expires = false
	// }

	const token = jwt.sign({id: req.user.id}, 'jwt_secret')
	res.json({token: token})
})

// Return user Information
router.get('/user', passport.authenticate('jwt',{ session: false }), (req, res) => {
	if ( !req.user ) {
		res.json({
			username: 'nobody'
		})
	}

	res.json({
		username: req.user.username
	})
})

// Logout
router.post('/logout', (req, res) => {
	req.logout()
	res.status(300).json({})
})

module.exports = router
