const like = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const likeController = require('../controllers/likeController');


like.get('/:productId',
    hasUser(),
    likeController.checkLike
);

like.post('/:productId',
    hasUser(),
    likeController.likeDislicke
);


module.exports = like;