// Common modules
const path = require('path')

// Initializing Express
const express = require('express'),
			app = express(),
			port = 3000

// Middlewares
const cookieParser = require('cookie-parser'),
			session = require('express-session'),
			bodyParser = require('body-parser')

app.use(cookieParser())
app.use(session({
	secret: 'cats',
	resave: false,
	saveUninitialized: false
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// If want to show flash message
const flash = require('connect-flash')
app.use(flash())

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Database
const db = require('./db')

// Passport
const passport = require('passport'),
			Strategy = require('passport-local').Strategy,
			ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

passport.use(new Strategy( (username, password, done) => {
	db.users.findByUsername(username, (err, user) => {

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

passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( (id, done) => {
  db.users.findById(id, (err, user) => {
    if (err) { return done(err) }
    done(null, user)
  })
})

app.use(passport.initialize())
app.use(passport.session())

// Routers
app.get('/', (req, res) => {

	// See what’s added to the reqeust
	// console.log(req.cookies)
	// console.log(req.session)
	// console.log(req.isisAuthenticated || req.isAuthenticated())

	// Check if a user is logged-in, is authenticated
	if ( !req.isAuthenticated() ) { res.redirect('/login') }
	
	res.render('index', {
		title: 'Home',
		user: req.user
	})
})
// Or, authentication check as a middleware
/* app.get('/', (req, res, next) => {

	// Check if a user is logged-in, is authenticated
	if ( !req.isAuthenticated() ) { res.redirect('/login') }

	return next()

}, (req, res) => {
	res.render('index', {
		title: 'Home',
		user: req.user
	})
}) */

app.get('/login', (req, res) => {

	// If any error
	console.log(req.flash('error'))

	res.render('login', { title: 'Login' })
})

app.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))

app.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/login')
})

// Run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
