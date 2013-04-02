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
		var pieces = _.last(filePath.split('/')).split('.'),		// strips off path and gets the filename
			name   = _(pieces).without(_.last(pieces)).join('-');	// strips file extension

		return name;
	};

	grunt.registerMultiTask('handlebars', 'Compile *.handlebars templates with given options.', function () {
		var options = this.options({
				separator: grunt.util.linefeed,
				namespace: 'Handlebars.templates',
				exportAMD: false,
				exportCommonJS: false,
				pathToHandlebars: '',		// only relevant to 'exportAMD: true' - amd style option
				knownHelpers: [],			// provide an array of known helpers
				knownOnly: false,			// compile known helpers only
				templateRoot: false,		// base value to strip from template names
				partial: false				// specify that templates are partials
			}),
			compilerOptions = {},
			processFilename,
			prefix, midfix, wrapOpen, wrapClose, suffix;

		grunt.verbose.writeflags(options, 'Options');

		// check for valid knownHelpers option
		if (!Array.isArray(options.knownHelpers)) {
			options.knownHelpers = [];
		} else {
			compilerOptions.knownHelpers = options.knownHelpers;
		}

		// decide template prefix
		if (options.exportAMD && options.exportCommonJS) {
			grunt.fail.warn('Cannot choose to compile as both an AMD and a CommonJS module. Please remove either the \'exportAMD\' or \'exportCommonJS\' option from your Gruntfile.js.');
		} else if (options.exportAMD) {
			prefix = 'define([\'' + options.pathToHandlebars + 'handlebars\'], function (Handlebars) {\n';
			grunt.log.writeln('Compiling as AMD/RequireJS module(s).');
			suffix = '});';
		} else if (options.exportCommonJS) {
			if (typeof options.exportCommonJS !== 'string') {
				grunt.fail.warn('Must provide a path to Handlebars module in order to compile as a CommonJS module.');
			}
			grunt.log.writeln('Compiling as Common JS module(s).');
			prefix = 'var Handlebars = require(\'' + options.exportCommonJS + '\');\n';
			suffix = '';
		} else {
			prefix = '(function() {\n';
			suffix = '}());';
		}

		midfix = 'var template = Handlebars.template, templates = ' + options.namespace + ' = ' + options.namespace + ' || {};\n';

		// decide template suffix

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

				filepath = filepath.split('/');
				filename = _.last(filepath);

				// option: need to check for templateRoot to strip?
				if (options.templateRoot && filename.indexOf(options.templateRoot) === 0) {
					filename = filename.replace(options.templateRoot, '');
					filepath[(filepath.length - 1)] = filename;
					grunt.log.writeln('Found templateRoot and stripped it from the template name: "' + filename + '"');
				}

				filepath = filepath.join('/');
				filename = processFilename(filepath);

				try {
					compiled = require('handlebars').precompile(src);
				} catch (e) {
					grunt.log.error(e);
					grunt.fail.warn('Handlebars failed to compile '+filepath+'.');
				}

				// source is compiled at this point, let us reconstruct		
				// decide template wrapping
				if (options.partials) {
					wrapOpen = 'Handlebars.partials[\'' + filename + '\'] = template(';
				} else {
					wrapOpen = 'templates[\'' + filename + '\'] = template(';
				}
				wrapClose = ');\n';

				// finally, put it all back together
				compiled = prefix + midfix + wrapOpen + compiled + wrapClose + suffix;
				templates.push(compiled);
			});

			output = partials.concat(templates);

			if (output.length < 1) {
				grunt.log.warn('Destination not written because there was no output.');
			} else {
				grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
				grunt.log.writeln('File "' + f.dest + '" created.');
			}
		});

	});

};