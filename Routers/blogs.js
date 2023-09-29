const express = require('express');
const Router = express.Router();
const { blogAdded, blogUpdated, getBlogs, getBlogById, blogDeleted } = require('../Controllers/blogs');

Router.post('/users/me/blogs', blogAdded);
Router.patch('/users/me/blogs/:id', blogUpdated);
Router.get('/users/me/blogs', getBlogs);
Router.get('/users/me/blogs/:id', getBlogById);
Router.delete('/users/me/blogs/:id', blogDeleted);

module.exports = Router;