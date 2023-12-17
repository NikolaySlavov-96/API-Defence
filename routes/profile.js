const profile = require('express').Router();

const profileController = require('../controllers/profilController');
const { hasUser } = require('../middlewares/guards');

profile.get('/profile',
    hasUser(),
    profileController.getUser);
profile.put('/profile',
    hasUser(),
    profileController.updateUser);
profile.delete('/profile',
    hasUser(),
    profileController.deleteUser);

profile.get('/produts',
    hasUser(),
    profileController.allUserProduct
);
profile.get('/comments',
    hasUser(),
    profileController.allCommentsInUser
);

// Adding given all posted commentars of current user 
// Adding given all posted product of current user 

module.exports = profile;