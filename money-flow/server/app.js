var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const { connectDB } = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
const swiftRoutes = require('./routes/swift.routes')
const cors = require('cors')
var app = express();
connectDB();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/auth", authRoutes);
app.use("/swift", swiftRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  res.status(err.status || 500);
  res.json({err})
});

module.exports = app;
