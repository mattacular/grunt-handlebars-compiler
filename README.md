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
			files: {
				'pkg/template-compile-test.js': 'template/*.handlebars'
			}
		},
		some: {
			files: {
				'pkg/template-compile-test2.js': ['template/template1.handlebars', 'template/template2.handlebars'] 
			},
			options: {
				namespace: 'myApp.templates'
			}
		}
	}
```

The `handlebars` task has the following options, none of which are required:

```js
	{
		separator: '',					// custom separator to put between concatenated files
		namespace: 'myApp.template',	// pick a template namespace, default is 'Handlebars.templates'
		processFilename: function () {}	// provide a custom function to process the template filename (takes full path to template as argument). by default, path and file extension are stripped.
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