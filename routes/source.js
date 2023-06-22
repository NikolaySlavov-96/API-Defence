const source = require('express').Router();
const { body } = require('express-validator');

const sourceConteroller = require('../controllers/sourceController');


source.get('/products', sourceConteroller.getAllSource); //All products

// product
source.get('/product/:idSource', sourceConteroller.getById);
source.post('/product',
    body('articul').notEmpty().withMessage('Articul name is Required'),
    // guards
    sourceConteroller.createSource);
source.put('/product/:idSource', sourceConteroller.updateSource);
source.delete('/product/:idSource', sourceConteroller.deleteSource);

//comment
// source.post('/product/:idSource/comment',);
// source.put('/product/:idSource/comment/:idComment',);
// source.delete('/product/:idSource/comment/:idComment',);

// detail page
// source.get('/product/:id/comments',);



module.exports = source;