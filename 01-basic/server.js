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
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

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
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    if (user.password != password) { return done(null, false) }
    return done(null, user)
  })
}))

passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( (id, done) => {
  db.users.findById(id, (err, user) => {
    if (err) { return done(err) }
    done(null, user)
  });
});

app.use(passport.initialize())
app.use(passport.session())

// Routers
app.get('/', ensureLoggedIn(), (req, res) => {

	// See what data is added to the reqeust
	// console.log(req.session)
	// console.log(req.isisAuthenticated || req.isAuthenticated())
	
	res.render('index', {
		title: 'Home',
		user: req.user
	})
})

// The developer’s original middleware to check whether the user is logged in. Only for passport.js
//
// app.get('/', (req, res, next) => {
// 	if ( req.session.passport && req.session.passport.constructor === Object && Object.entries(req.session.passport).length > 0 ) { next() }
// 	else { res.redirect('/login') }
// }, (req, res) => {
// 	res.render('index', {
// 		title: 'Home',
// 		user: req.user
// 	})
// })

app.get('/login', (req, res) => {

	// See what data is added to the reqeust
	// console.log(req.session)
	// console.log(req.isisAuthenticated || req.isAuthenticated())

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
