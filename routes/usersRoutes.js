const express = require('express');
const path = require('path');

const userRoutes = express.Router();
const usersController = require('../controllers/usersController')

userRoutes.get('/register',usersController.register);

userRoutes.get('/login', usersController.login);

module.exports = userRoutes