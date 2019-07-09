const express = require('express');

const BlogController = require('./controllers/blogpost.controller');
const SectionController = require('./controllers/section.controller');

module.exports = app => {

    const apiRoutes = express.Router();
    const blogPostRoutes = express.Router();
    const sectionRoutes = express.Router();

    /* Middleware */
    apiRoutes.use('/blogPosts', blogPostRoutes);
    apiRoutes.use('/sections', sectionRoutes);

    sectionRoutes.get('/', SectionController.getSections);

    /* Blog Post Routes */
    blogPostRoutes.post('/', BlogController.publishPost);

    
    app.use('/api', apiRoutes);
};