const source = require('express').Router();
const { body } = require('express-validator');

const sourceConteroller = require('../controllers/sourceController');
const commetController = require('../controllers/commentController');


source.get('/products', sourceConteroller.getAllSource); //All products

// product
source.get('/product/:idSource', sourceConteroller.getSourceById);
source.post('/product',
    body('articul').isLength({ min: 5 }).withMessage('Articul field minal lenth is 5 characters'),
    body('mark').isLength({ min: 5 }).withMessage('Mark field minal lenth is 5 characters'),
    body('model').isLength({ min: 5 }).withMessage('Model field minal lenth is 5 characters'),
    body('description').isLength({ min: 5 }).withMessage('Description field minal lenth is 5 characters'),
    // guard
    sourceConteroller.createSource);
source.put('/product/:idSource', sourceConteroller.updateSource);
body('articul').isLength({ min: 5 }).withMessage('Articul field minal lenth is 5 characters'),
    body('mark').isLength({ min: 5 }).withMessage('Mark field minal lenth is 5 characters'),
    body('model').isLength({ min: 5 }).withMessage('Model field minal lenth is 5 characters'),
    body('release').isLength({ min: 5 }).withMessage('Release field minal lenth is 5 characters'),
    body('description').isLength({ min: 5 }).withMessage('Description field minal lenth is 5 characters'),
    //guard
    source.delete('/product/:idSource', sourceConteroller.deleteSource);

//comment
source.get('/product/:idSource/comment/:idComment', commetController.getCommentByIdComment);
source.post('/product/:idSource/comment',
    body('name').isLength({ min: 3 }).withMessage('Name length is minimal 3 characters'),
    body('commentar').isLength({ min: 3 }).withMessage('Commentar length is minimal 3 characters'),
    commetController.createComments);
source.put('/product/:idSource/comment/:idComment',
    body('name').isLength({ min: 3 }).withMessage('Name length is minimal 3 characters'),
    body('commentar').isLength({ min: 3 }).withMessage('Commentar length is minimal 3 characters'),
    commetController.editCommentByIdComment);
source.delete('/product/:idSource/comment/:idComment', commetController.deleteCommentByIdComment);

// detail page
source.get('/product/:idSource/comments', commetController.getCommentarsByIdProduct);


module.exports = source;