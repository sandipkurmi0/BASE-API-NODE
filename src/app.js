import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import setRoutes from './routes';

import './config/database';

const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setRoutes(app);
app.use('/', setRoutes);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  console.log(err);
  // set locals, only providing error in development
  // console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');0
  res.status(err.status || 500).send('error');
});

export default app;
