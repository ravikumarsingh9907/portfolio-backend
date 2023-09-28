const express = require('express');
const Router = express.Router();
const Blog = require('../Model/blogs');
const catchAsyncError = require('../Exceptions/async-error');
const expError = require('../Exceptions/exp-error');
const { blogAdded, blogUpdated, getBlogs, getBlogById, blogDeleted } = require('../Controllers/blogs');

Router.post('/users/me/blogs', blogAdded);
Router.patch('/users/me/blogs/:id', blogUpdated);
Router.get('/users/me/blogs', getBlogs);
Router.get('/users/me/blogs/:id', getBlogById);
Router.delete('/users/me/blogs/:id', blogDeleted);

module.exports = Router;