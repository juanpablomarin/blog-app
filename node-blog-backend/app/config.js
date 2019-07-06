const config = {
	port: process.env.PORT || 8080,
	db: 'mongodb://localhost/myblog',
	test_port: 4242,
	test_db: 'mongodb://localhost/myblog_test'
  }
  
module.exports = config;