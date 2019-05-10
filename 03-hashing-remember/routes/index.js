const express = require('express'),
			passport = require('passport'),
			ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn,
			User = require('../db/User'),
			router = express.Router()

/* Home */
router.get('/', ensureLoggedIn(), (req, res) => {
	// Debug
	// console.log('Header: ')
	// console.log(req.headers)
	// console.log(req.session)

	res.render('index', {
		title: 'Home',
		user: req.user
	})
})

/* Signup */
router.get('/signup', (req, res) => {
	res.render('signup', { title: 'Signup' })
})

router.post('/signup', (req, res) => {
	var user = new User({
		username: req.body.username,
		password: req.body.password
	})

	user.save().then(() => {
		req.login(user, (err) => {
			if (err) {
				return res.redirect('/signup')
			}
			res.redirect('/')
		})
	}).catch((err) => {
		res.redirect('/signup')
	})
})

/* Login */
router.get('/login', (req, res) => {
	res.render('login', { title: 'Login' })
})

/**
 * @link https://stackoverflow.com/questions/15609232/how-to-add-remember-me-to-my-app-with-passport
 */
router.post('/login', passport.authenticate('local', {
	// successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}), (req, res) => {
	if ( req.body.remember ) {
		req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000 // Expires in 1 day
	} else {
		req.session.cookie.expires = false
	}
	res.redirect('/')
})

/* Logout */
router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/login')
})

module.exports = router
