/*
 *	grunt-handlebars-compiler
 *	https://github.com/mattacular/grunt-handlebars-compiler
 *
 *	Copyright (c) 2013 mstills
 *	Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		// scripts to be linted
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/handlebars.js',
				'<%= nodeunit.tests %>'
			]
		},
		// before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},
		// test configuration
		handlebars: {
			// a vanilla run-through with no options specified (ie. a test of the default config)
			vanilla: {
				files: {
					'tmp/out.compiled.js': 'test/fixtures/helloWorld.handlebars'
				}
			},
			// test namespace option
			namespace: {
				files: {
					'tmp/out-namespace.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					namespace: 'myApp.templates'
				}
			},
			'prepVanilla': {
				'files': {
					'test/expected/helloWorld.compiled.js': 'test/fixtures/helloWorld.handlebars'
				}
			},
			'prepNamespace': {
				files: { 
					'test/expected/helloWorld-namespace.compiled.js': 'test/fixtures/helloWorld.handlebars' 
				},
				options: {
					namespace: 'myApp.templates' 
				}
			}
		},
		// test suite
		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-internal');

	grunt.registerTask('prepTest', ['clean', 'handlebars:prepVanilla', 'handlebars:prepNamespace']);
	grunt.registerTask('test', ['clean', 'handlebars:vanilla', 'handlebars:namespace', 'nodeunit']);
	grunt.registerTask('default', ['jshint', 'test']);

};