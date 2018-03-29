'use strict';

module.exports = function(app) {
    var users = require('../controllers/usersController.js');
    
    app.route('/users')
      .get(users.listUsers)
      .post(users.createUser);
  
    
    app.route('/users/:userId')
      .get(users.readUser)
      .put(users.updateUser)
      .delete(users.removeUser);
    
  };
