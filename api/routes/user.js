'use strict';

module.exports = function(app) {
  const user = require('../controllers/userController');

  app
    .route('/login')
    .post(user.login);

  app
    .route('/users')
    .get(user.getProfile)
    .post(user.register);

  app
    .route('/logout')
    .post(user.logout);
};
