/*
 *	grunt-handlebars-compiler
 *	https://github.com/mattacular/grunt-handlebars-compiler
 *
 *	Copyright (c) 2013 mstills
 *	Licensed under the MIT license.
 */
module.exports = function(grunt) {
	'use strict';
	
	var _,
		defaultProcessFilename;

	_ = grunt.util._;

	// filename conversion for templates and partials
	defaultProcessFilename = function (filePath) {
		var pieces = _.last(filePath.split('/')).split('.'),
			name   = _(pieces).without(_.last(pieces)).join('-'); // strips file extension
		return name;
	};

	grunt.registerMultiTask('handlebars', 'Compile *.handlebars templates into the Handlebars namespace.', function () {
		var options = this.options({
				separator: grunt.util.linefeed + grunt.util.linefeed,
				namespace: 'Handlebars.templates'
			}),
			processFilename;

		grunt.verbose.writeflags(options, 'Options');

		// assign filename processing (this decides template name under namespace)
		processFilename = options.processFilename || defaultProcessFilename;

		this.files.forEach(function (f) {
			var partials = [],
				templates = [],
				output;

			// iterate files, processing partials and templates separately
			f.src.filter(function (filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			})
			.forEach(function (filepath) {
				var src = grunt.file.read(filepath),
					compiled, filename;

				filename = processFilename(filepath);

				try {
					compiled = require('handlebars').precompile(src);
				} catch (e) {
					grunt.log.error(e);
					grunt.fail.warn('Handlebars failed to compile '+filepath+'.');
				}

				compiled = '(function() {\n' + 
							'var template = Handlebars.template, templates = ' + options.namespace + ' = ' + options.namespace + ' || {};\n' + 
							'templates[\'' + filename + '\'] = template(' + compiled + ');\n})();';

				templates.push(compiled);
			});

			output = partials.concat(templates);

			if (output.length < 1) {
				grunt.log.warn('Destination not written because compiled files were empty.');
			} else {
				grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
				grunt.log.writeln('File "' + f.dest + '" created.');
			}
		});

	});

};