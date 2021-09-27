const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect('mongodb://localhost:27017/g6moneyFlow');
    mongoose.connection.once('connected', () => console.log('DB Connection Established Successfully.'))
}

module.exports = {connectDB}