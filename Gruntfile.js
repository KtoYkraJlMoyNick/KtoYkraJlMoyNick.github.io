module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "src",
					src: [
					 "css/*.css",
					 "img/**",
					 "js/*.js",
					 "form.html",
					 "index.html"
					],
				dest: "./"
				}]
			}
		},
		
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
	grunt.registerTask('build',[
		'copy:build'
		]);
	grunt.registerTask('dev',[
		'less:development'
		]);
};