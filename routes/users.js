const users = require('express').Router();
const { body } = require('express-validator');

const userController = require('../controllers/userController');


users.post('/register',
    body('email').isEmail().withMessage('Emais is not corret'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 5 }).withMessage('Password is not doesn\'t long'),
    body('year').notEmpty().withMessage('Years is requited'),
    userController.createUser);

users.post('/login',
    body('username').notEmpty().withMessage('Username is requied'),
    body('password').notEmpty().withMessage('Passwor is required'),
    userController.getUser);

users.get('/logout', userController.exitUset);


module.exports = users;