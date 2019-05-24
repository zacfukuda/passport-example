const express = require('express'),
			passport = require('passport'),
			User = require('../db/User'),
			router = express.Router()

/* Home */
router.get('/', (req, res) => {
	
	// Check if a user is logged-in, is authenticated
	if ( !req.isAuthenticated() ) { res.redirect('/login') }

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
	let user = new User({
		username: req.body.username,
		password:req.body.password
	})

	user.save().then(() => {
		req.login(user, (err) => {
			if (err) { res.redirect('/signup') }
			res.redirect('/')
		})
	}).catch((err) => {
		res.redirect('/signup')
	})
})

/* Login */
router.get('/login', (req, res) => {

	// If any error
	console.log(req.flash('error'))

	res.render('login', { title: 'Login' })
})

router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))

/* Logout */
router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/login')
})

module.exports = router
