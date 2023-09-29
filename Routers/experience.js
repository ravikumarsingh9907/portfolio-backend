const express = require('express');
const Router = express.Router();
const { experienceAdded, experienceUpdated, getExperience, getExperienceById, experienceDeleted } = require('../Controllers/experience');

Router.post('/users/me/experience', experienceAdded);
Router.patch('/users/me/experience/:id', experienceUpdated);
Router.get('/users/me/experience', getExperience);
Router.get('/users/me/experience/:id', getExperienceById);
Router.delete('/users/me/experience/:id', experienceDeleted);

module.exports = Router;