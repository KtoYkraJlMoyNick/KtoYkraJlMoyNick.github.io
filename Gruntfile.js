module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var config = {
		pkg: grunt.file.readJSON('package.json')
	};
	grunt.initConfig(config);
	grunt.registerTask('build', []);
};