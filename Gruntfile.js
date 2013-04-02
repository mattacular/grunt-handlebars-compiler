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
			// strip template root option
			templateRoot: {
				files: {
					'tmp/out-templateRoot.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					templateRoot: 'hello'	// should compile to Handlebar.templates.World
				}
			},
			// strip template root option
			exportAMD: {
				files: {
					'tmp/out-exportAMD.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					exportAMD: true
				}
			},
			// strip template root option
			exportCommonJS: {
				files: {
					'tmp/out-exportCommonJS.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					exportCommonJS: 'handlebars'
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
			prepVanilla: {
				'files': {
					'test/expected/helloWorld.compiled.js': 'test/fixtures/helloWorld.handlebars'
				}
			},
			prepNamespace: {
				files: { 
					'test/expected/helloWorld-namespace.compiled.js': 'test/fixtures/helloWorld.handlebars' 
				},
				options: {
					namespace: 'myApp.templates' 
				}
			},
			prepExportCommonJS: {
				files: { 
					'test/expected/helloWorld-exportCommonJS.compiled.js': 'test/fixtures/helloWorld.handlebars' 
				},
				options: {
					exportCommonJS: 'handlebars' 
				}
			},
			prepExportAMD: {
				files: { 
					'test/expected/helloWorld-exportAMD.compiled.js': 'test/fixtures/helloWorld.handlebars' 
				},
				options: {
					exportAMD: true
				}
			},
			prepTemplateRoot: {
				files: { 
					'test/expected/helloWorld-templateRoot.compiled.js': 'test/fixtures/helloWorld.handlebars' 
				},
				options: {
					templateRoot: 'hello' 
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

	// 'prepTest' should be run once a stable build has been confirmed (ie. creates new 'expected' files)
	grunt.registerTask('prepTest', ['clean', 'handlebars:prepVanilla', 'handlebars:prepNamespace', 'handlebars:prepTemplateRoot', 'handlebars:prepExportAMD', 'handlebars:prepExportCommonJS']);
	// run tests with nodeunit
	grunt.registerTask('test', ['clean', 'handlebars:vanilla', 'handlebars:namespace', 'handlebars:templateRoot', 'handlebars:exportAMD', 'handlebars:exportCommonJS', 'nodeunit']);
	// lint and test before declaring a revision stable
	grunt.registerTask('default', ['jshint', 'test']);

};