var grunt	= require('grunt'),
	fs		= require('fs');

exports.handlebars = {
	// test the vanilla run config
	vanilla: function (test) {
		'use strict';

		var actual, expected;

		test.expect(1);

		actual = grunt.file.read('tmp/out.compiled.js');
		expected = grunt.file.read('test/expected/helloWorld.compiled.js');

		test.equal(expected, actual, 'The compiled output should match the clean (expected) build');

		test.done();
	}
};