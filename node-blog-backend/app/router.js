const express = require('express');

const BlogController = require('./controllers/blogpost.controller');
const SectionController = require('./controllers/section.controller');

module.exports = app => {

    const apiRoutes = express.Router();
    const blogPostRoutes = express.Router();
    const sectionRoutes = express.Router();

    /* Middleware */
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    apiRoutes.use('/blogPosts', blogPostRoutes);
    apiRoutes.use('/sections', sectionRoutes);

    sectionRoutes.get('/', SectionController.getSections);

    /* Blog Post Routes */
    blogPostRoutes.post('/', BlogController.publishPost);
    blogPostRoutes.get('/')


    app.use('/api', apiRoutes);
};