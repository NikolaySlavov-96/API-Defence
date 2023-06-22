const profile = require('express').Router();

const profileController = require('../controllers/profilController');

profile.get('/profile', profileController.getUser);
profile.put('/profile', profileController.updateUser);
profile.delete('/profile', profileController.deleteUser);

module.exports = profile;