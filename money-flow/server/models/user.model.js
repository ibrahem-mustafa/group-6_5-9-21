const mongoose = require('mongoose')


const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  branches: [branchSchema],
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const User = mongoose.model('users', userSchema);

module.exports = {User};