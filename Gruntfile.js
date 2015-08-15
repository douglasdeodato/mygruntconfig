	module.exports = function  (grunt) {
	var config = {};


	//setup the configuration object
	var jshint;

	//all tasks that must be loaded.
	var tasks = [
			'grunt-contrib-jshint'
			,'grunt-contrib-watch'
			,'grunt-contrib-concat'
			,'grunt-contrib-uglify'
			,'grunt-contrib-jasmine'
	];

		//concat ===============================

		var concat
		config.concat = concat = {};

		concat.dev = {
			files: {
				"public/myapp.development.js": [
					"lib/vendor"
					,"lib/**/*.js"
					,"calc/**/*.js"
				]
			}
		};


		//uglify ===============================
		config.uglify = {dist: {
			options: {sourceMap:"public/myapp.production.js.map"}
			,files: {
				"public/myapp.production.js": ["public/myapp.development.js"]
			}
		}}


		//jasmine ===============================
		var jasmine;
		config.jasmine = jasmine = {};

		jasmine.calc = {
			src:"calc/calc.js"
			, options:{
				specs: "spec/calc.spec.js"
			}
		};


	config.jshint = jshint ={};


	jshint.dist = {
	options: {jshintrc: ".jshintrc"},
	files: {all: ["lib/main.js","lib/test.js"]}
	};

	//Watch ===============================

	config.watch = {
		 scripts: {
		 	files: ["lib/**/*.js", "calc/**/*.js" , "spec/**/*.js"]
		 	,tasks: ["dev"]
		 }
	}

	jshint.dev = {
	options: {jshintrc: ".jshintrc.dev"},
	files: {all: ["lib/main.js","lib/test.js"]}
	};


	//Register custom tasks ===============================
	grunt.registerTask('default',['dev']);
	grunt.registerTask('dev',['jshint:dev','jasmine', 'concat:dev']);
	grunt.registerTask('dist',['jshint:dist','jasmine', 'concat:dev', 'uglify']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};