var grunt	= require('grunt'),
	fs		= require('fs');

exports.handlebars = function (test) {
	'use strict';

	var i, actual, expected, activeTest, tests;

	// define tests for the handlebars task here
	tests = [
		{
			name: 'vanilla',
			prefix: '',
			assertion: 'The vanilla (no options) compiled output should match the clean (prepped) build'
		},		
		{
			name: 'vanilla',
			prefix: '-returnTemplates',
			assertion: 'The vanilla (with option returnTemplates set to true) compiled output should match the clean (prepped) build'
		},
		{
			name: 'namespace',
			prefix: '-namespace',
			assertion: 'The namespace compiled output should match the clean (prepped) build'
		},
		{
			name: 'exportAMD',
			prefix: '-exportAMD',
			assertion: 'The output compiled as a AMD module should match the clean (prepped) build'
		},
		{
			name: 'exportAMD',
			prefix: '-exportAMDWithReturnTemplates',
			assertion: 'The output compiled as a AMD module (with option returnTemplates set to true) should match the clean (prepped) build'
		},
		{
			name: 'exportCommonJS',
			prefix: '-exportCommonJS',
			assertion: 'The output compiled as a Common JS module should match the clean (prepped) build'
		},
		{
			name: 'exportCommonJS',
			prefix: '-exportCommonJSWithReturnTemplates',
			assertion: 'The output compiled as a Common JS module (with option returnTemplates set to true) should match the clean (prepped) build'
		},
		{
			name: 'templateRoot',
			prefix: '-templateRoot',
			assertion: 'The templateRoot should have been stripped to match the clean (prepped) build'
		},
		{
			name: 'knownHelpers',
			prefix: '-knownHelpers',
			assertion: 'The output compiled with known helpers should match the clean (prepped) build'
		},
		{
			name: 'min',
			prefix: '-min',
			assertion: 'The output compiled with minified option should match the clean (prepped) build'
		},
		{
			name: 'compress',
			prefix: '-compress',
			assertion: 'The output compiled with compress option should match the clean (prepped) build'
		}
	];

	test.expect(tests.length);

	for (i = 0; i < tests.length; i += 1) {
		activeTest = tests[i];

		actual = grunt.file.read('tmp/out' + activeTest.prefix + '.compiled.js');
		expected = grunt.file.read('test/expected/helloWorld' + activeTest.prefix + '.compiled.js');

		test.equal(actual, expected, activeTest.assertion);
	}

	test.done();
};