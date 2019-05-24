// Common modules
const path = require('path')

// MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/passport', {useNewUrlParser: true, useCreateIndex: true})

// Initializing Express
const express = require('express'),
			app = express(),
			port = 4000

// Middlewares
const cookieParser = require('cookie-parser'),
			bodyParser = require('body-parser'),
			flash = require('connect-flash'),
			passportControl = require('./lib/passport-control')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())

// Routers
app.use('/api', require('./routes'))

// Run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
