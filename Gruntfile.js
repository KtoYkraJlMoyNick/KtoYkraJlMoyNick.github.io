module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			build: ['css/', 'img/', 'js/']
		}, 
		
		postcss: {
		  options: {
			processors: [
			  require('autoprefixer')({browsers: 'last 2 versions'})
			]
		  },
		  style: {
			src: ["css/*.css"]
		  }
		},
	
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "src",
					src: [
					 "css/*.css",
					 "img/**",
					 "fudi/**",
					 "folio/**",
					 "pink/**",
					 "technomart/**",
					 "libs/**",
					 "js/**",
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
		'clean:build',
		'copy:build',
		'postcss'
		]);
	grunt.registerTask('dev',[
		'less:development'
		]);
};