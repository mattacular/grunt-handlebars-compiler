# grunt-handlebars-compiler

A [Grunt](http://gruntjs.com) plugin for pre-compiling Handlebars templates to a single concatenated file (or individually, whichever floats your boat).

## Getting Started

Install the task:

```bash
npm install grunt-handlebars-compiler
```

Then add this line to your project's `Gruntfile.js`:

```js
grunt.loadNpmTasks('grunt-handlebars-compiler');
```

This allows you to use the 'handlebars' task to specify targets!

```js
	handlebars: {
		all: {
			/*
				The output will be formatted as a Common JS module, using a require()
				statement where the argument is the Handlebars path provided in the option.
			*/
			files: {
				'pkg/template-compile-test.js': 'template/*.handlebars'
			},
			options: {
				exportCommonJS: 'handlebars'
			}
		},
		some: {
			/*
				The output will register two templates under myApp.templates namespace after stripping the templateRoot:
					* myApp.templates.template1
					* myApp.templates.templae2
			*/
			files: {
				'pkg/template-compile-test2.js': ['template/webApp-template1.handlebars', 'web-Apptemplate/template2.handlebars'] 
			},
			options: {
				namespace: 'myApp.templates',
				templateRoot: 'webApp-'
			}
		}
	}
```

The `handlebars` task has the following options, none of which are required. The defaults are shown:

```js
	{
		separator: '/n',						// specify character to delimit individual compiled files in the output
		namespace: 'Handlebars.templates',		// specify the namespace for templates to be registered to
		exportAMD: false,						// export compiled templates as AMD (RequireJS) module
		exportCommonJS: false,					// export as Common JS, provide string path to Handlebars instead of false
		pathToHandlebars: '',					// only relevant if 'exportAMD === true' - provide path to Handlebars
		knownHelpers: [],						// provide an array of known helpers
		knownOnly: false,						// compile known helpers only (requires 'knownHelpers')
		templateRoot: false,					// a value to strip from the beginning of template names
		partial: false							// specify that templates these templates are partials
	}
```

## Documentation

The `handlebars` task is a [multi task](https://github.com/gruntjs/grunt/blob/master/docs/types_of_tasks.md#multi-tasks), meaning that it will implicitly iterate over all of its targets if no target is specified.

## Changelog

* v0.0.1: Initial release (alpha)

## Contributing

Feel free to fork if you see possible improvements or contact me directly if you want to contribute to this project: [mattacular@gmail.com][mailto:mattacular@gmail.com]

## Author

* [Matt Stills](http://www.mattstills.com)
  [![@mattacular on Twitter](https://secure.gravatar.com/avatar/fc34dc6cf17121952e967cdba43f76fe?s=70)](http://twitter.com/mattacular "Follow @mattacular on Twitter")

## License

This project is licensed under the [MIT](http://mths.be/mit) license.