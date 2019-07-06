const express = require('express');

const BlogController = require('./controllers/blogpost.controller');

module.exports = app => {

    const apiRoutes = express.Router();
    const blogPostRoutes = express.Router();

    /* Middleware */
    apiRoutes.use('/blogPosts', blogPostRoutes);

    /* Blog Post Routes */
    blogPostRoutes.post('/', BlogController.publishPost);


    app.use('/api', apiRoutes);
};