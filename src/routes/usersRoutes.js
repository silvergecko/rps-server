'use strict';
const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController.js');

router.route('/users')
  .get(users.listUsers)
  .post(users.createUser);

router.route('/users/:userId')
  .get(users.readUser)
  .put(users.updateUser)
  .delete(users.removeUser);

module.exports = router;
