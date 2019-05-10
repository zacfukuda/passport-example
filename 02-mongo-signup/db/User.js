const mongoose = require('mongoose')

// Mongoose Model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    minlength: 2,
    maxlength: 16,
    lowercase: true,
    required: true,

  },
  password: {
    type: String,
    required: true,
  }
})

// Export Mongoose "User" model
module.exports = mongoose.model('User', userSchema)
