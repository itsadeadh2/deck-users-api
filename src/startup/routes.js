const express = require('express');

const index = require('../routes/index.route');
const users = require('../routes/users.route');

module.exports = function(app) {
  app.use(express.json());
  app.use('/', index);
  app.use('/users', users);
};