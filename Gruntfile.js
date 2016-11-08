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
			tests: ['tmp'],
			expected: ['test/expected']
		},
		// test configuration
		handlebars: {
			// a vanilla run-through with no options specified (ie. a test of the default config)
			vanilla: {
				files: {
					'tmp/out.compiled.js': 'test/fixtures/helloWorld.handlebars'
				}
			},
			// a vanilla run-through with option returnTemplates set to true
			vanillaWithReturnTemplates: {
				files: {
					'tmp/out-returnTemplates.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					returnTemplates: true
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
					'tmp/out-exportAMD.compiled.js': [
						'test/fixtures/helloWorld.handlebars',
						'test/fixtures/helloWorldTwo.handlebars'
					]
				},
				options: {
					exportAMD: true
				}
			},
			exportAMDWithReturnTemplates: {
				files: {
					'tmp/out-exportAMDWithReturnTemplates.compiled.js': [
						'test/fixtures/helloWorld.handlebars',
						'test/fixtures/helloWorldTwo.handlebars'
					]
				},
				options: {
					exportAMD: true,
					returnTemplates: true
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
			exportCommonJSWithReturnTemplates: {
				files: {
					'tmp/out-exportCommonJSWithReturnTemplates.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					exportCommonJS: 'handlebars',
					returnTemplates: true
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
			// test known helpers option
			knownHelpers: {
				files: {
					'tmp/out-knownHelpers.compiled.js': 'test/fixtures/helloWorld-helpers.handlebars'
				},
				options: {
					'knownHelpers': ['if', 'each']
				}
			},
			// test min option
			min: {
				files: {
					'tmp/out-min.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					min: true
				}
			},
			// test compress option
			compress: {
				files: {
					'tmp/out-compress.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					compress: true
				}
			},
			// test partials option
			prepVanilla: {
				'files': {
					'test/expected/helloWorld.compiled.js': 'test/fixtures/helloWorld.handlebars'
				}
			},
			// test returnTemplates option
			prepVanillaWithReturnTemplates: {
				'files': {
					'test/expected/helloWorld-returnTemplates.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					returnTemplates: true
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
			prepExportCommonJSWithReturnTemplates: {
				files: {
					'test/expected/helloWorld-exportCommonJSWithReturnTemplates.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					exportCommonJS: 'handlebars',
					returnTemplates: true
				}
			},
			prepExportAMD: {
				files: {
					'test/expected/helloWorld-exportAMD.compiled.js': [
						'test/fixtures/helloWorld.handlebars',
						'test/fixtures/helloWorldTwo.handlebars'
					]
				},
				options: {
					exportAMD: true
				}
			},
			prepExportAMDWithReturnTemplates: {
				files: {
					'test/expected/helloWorld-exportAMDWithReturnTemplates.compiled.js': [
						'test/fixtures/helloWorld.handlebars',
						'test/fixtures/helloWorldTwo.handlebars'
					]
				},
				options: {
					exportAMD: true,
					returnTemplates: true
				}
			},
			prepTemplateRoot: {
				files: {
					'test/expected/helloWorld-templateRoot.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					templateRoot: 'hello'
				}
			},
			prepKnownHelpers: {
				files: {
					'test/expected/helloWorld-knownHelpers.compiled.js': 'test/fixtures/helloWorld-helpers.handlebars'
				},
				options: {
					'knownHelpers': ['if', 'each']
				}
			},
			prepMin: {
				files: {
					'test/expected/helloWorld-min.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					'min': true
				}
			},
			// test compress option
			prepCompress: {
				files: {
					'test/expected/helloWorld-compress.compiled.js': 'test/fixtures/helloWorld.handlebars'
				},
				options: {
					compress: true
				}
			},
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
	grunt.registerTask('prep', ['clean:expected', 'handlebars:prepVanilla', 'handlebars:prepVanillaWithReturnTemplates', 'handlebars:prepNamespace', 'handlebars:prepTemplateRoot', 'handlebars:prepExportAMD', 'handlebars:prepExportAMDWithReturnTemplates', 'handlebars:prepExportCommonJS', 'handlebars:prepExportCommonJSWithReturnTemplates', 'handlebars:prepKnownHelpers', 'handlebars:prepMin', 'handlebars:prepCompress']);
	// run tests with nodeunit
	grunt.registerTask('test', ['clean:tests', 'handlebars:vanilla', 'handlebars:vanillaWithReturnTemplates', 'handlebars:namespace', 'handlebars:templateRoot', 'handlebars:exportAMD', 'handlebars:exportAMDWithReturnTemplates', 'handlebars:exportCommonJS', 'handlebars:exportCommonJSWithReturnTemplates', 'handlebars:knownHelpers', 'handlebars:min', 'handlebars:compress', 'nodeunit']);
	// lint and test before declaring a revision stable
	grunt.registerTask('default', ['jshint', 'test']);
};