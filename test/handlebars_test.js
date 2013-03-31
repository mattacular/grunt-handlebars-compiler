var grunt	= require('grunt'),
	fs		= require('fs');

exports.handlebars = function (test) {
	'use strict';

	var actual, expected, nsActual, nsExpected;

	test.expect(2);

	// test vanilla run-through
	actual = grunt.file.read('tmp/out.compiled.js');
	expected = grunt.file.read('test/expected/helloWorld.compiled.js');

	// test namespace run-through
	nsActual = grunt.file.read('tmp/out-namespace.compiled.js');
	nsExpected = grunt.file.read('test/expected/helloWorld-namespace.compiled.js');

	test.equal(expected, actual, 'The vanilla compiled output should match the clean (expected) build');
	test.equal(nsExpected, nsActual, 'The namespace compiled output should match the clean (expected) build');

	test.done();
};