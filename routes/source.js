const source = require('express').Router();
const { body } = require('express-validator');

const sourceConteroller = require('../controllers/sourceController');
const commetController = require('../controllers/commentController');


source.get('/products', sourceConteroller.getAllSource); //All products

// product
source.get('/product/:idSource', sourceConteroller.getSourceById);
source.post('/product',
body('articul').notEmpty().withMessage('Articul name is Required'),
// guards
sourceConteroller.createSource);
source.put('/product/:idSource', sourceConteroller.updateSource);
source.delete('/product/:idSource', sourceConteroller.deleteSource);

//comment
source.get('/product/:idSource/comment/:idComment', commetController.getCommentByIdComment);
source.post('/product/:idSource/comment', commetController.createComments);
source.put('/product/:idSource/comment/:idComment', commetController.editCommentByIdComment);
source.delete('/product/:idSource/comment/:idComment', commetController.deleteCommentByIdComment);

// detail page
source.get('/product/:idSource/comments', commetController.getCommentarsByIdProduct);


module.exports = source;