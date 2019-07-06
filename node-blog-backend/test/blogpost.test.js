process.env.NODE_ENV = 'test';

const BlogPost = require('../app/models/blogpost.model');
const server = require('../server');
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const blogURL = '/api/blogPosts';

describe('Blog Posts', () => {

    beforeEach(done => {

        BlogPost.remove({}, err => {
            if (err) console.error(err);
            done();
        });

    });

    describe('API Routes', () => {
        it('should POST a new BlogPost', done => {
            const NewBlogPost = {
                url: 'my-first-blog-post',
                title: 'My First Blog Post',
                body: 'Lorem Ipsum text',
                tags: ['blog', 'nodejs', 'tags']
            };

            chai.request(server)
                .post(blogURL)
                .send(NewBlogPost)
                .end((err, response) => {
                    
                    expect(response).to.have.status(200);
                    expect(response.body).to.be.an('object');
                    
                    const body = response.body;
                    expect(body).to.have.property('msg')
                        .eql('Successfully published blog post.');
                    expect(body).to.have.property('blogPost');
                    
                    const blogPost = body.blogPost;
                    expect(body.blogPost).to.have.property('url')
                        .and.be.an('string')
                        .eql(NewBlogPost.url);
                    
                    expect(blogPost).to.have.property('title')
                        .and.be.an('string')
                        .eql(NewBlogPost.title);
                    
                    expect(blogPost).to.have.property('body')
                        .and.be.an('string')
                        .eql(NewBlogPost.body);

                    expect(blogPost).to.have.property('tags')
                        .and.be.an('array')
                        .and.have.length(NewBlogPost.tags.length)
                        .eql(NewBlogPost.tags);

                    expect(blogPost).to.have.property('date');
                    expect(blogPost).to.have.property('_id');

                    done();
                });

        });

        it('should reject the BlogPost request', done => {
            const invalidMockBlogPost = {
                title: 'Blog Post',
                body: '<p>text</p>'
            }

            chai.request(server)
                .post(blogURL)
                .send(invalidMockBlogPost)
                .end((err, response) => {
                    expect(response).to.have.status(422);
                    expect(response.body).to.be.an('object');
                    expect(response.body).to.have.property('msg')
                        .eql('Server encountered an error when publishing new blog post');

                    done();
                });

        });
    });
});