const users = require('express').Router();
const { body } = require('express-validator');

const userController = require('../controllers/userController');
const { isGuest, hasUser } = require('../middlewares/guards');


users.post('/register',
    isGuest(),
    body('email').isEmail().withMessage('Emais is not corret'),
    body('username').isLength({ min: 6 }).withMessage('Username minimal size is 6 characters'),
    body('password').isLength({ min: 8 }).withMessage('Invalid password').bail()
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/).withMessage('Incorrect type of password'),
    body('rePassword').custom((value, { req }) => {
        return value == req.body.password;
    }).withMessage('Password missmatch!'),
    body('year').notEmpty().withMessage('Years is requited'),
    userController.createUser);

users.post('/login',
    isGuest(),
    body('username').notEmpty().withMessage('Username is requied'),
    body('password').notEmpty().withMessage('Passwor is required'),
    userController.getUser);

users.get('/logout',
    hasUser(),
    userController.exitUset);


module.exports = users;