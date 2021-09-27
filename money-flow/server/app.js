var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const { connectDB } = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
var app = express();
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/auth", authRoutes);

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
