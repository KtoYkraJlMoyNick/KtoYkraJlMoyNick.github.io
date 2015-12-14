module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			development: {
				files: {
					['src/css/style.css']: ['src/less/style.less']
				}
			}
		},
		
		watch: {
			development: {
				files: ['src/less/*/*'],
				tasks: ['less:development'],
				options: {
					spawn: false,
				}
			}
		}
	};
	grunt.initConfig(config);
	grunt.registerTask('dev',[
		'less:development'
		]);
};