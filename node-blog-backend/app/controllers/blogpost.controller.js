"use strict"
const BlogPost = require('../models/blogpost.model');

exports.publishPost = (request, response) => {
    const NewBlogPost = new BlogPost(request.body);
    NewBlogPost.save((err, blogPost) => {
        if (err) {
            return response.status(422).json({
                msg: 'Server encountered an error when publishing new blog post',
                error: err
            });
        } else {
            return response.status(200).json({
                msg: 'Successfully published blog post.',
                blogPost: blogPost
            });
        }
    });
}