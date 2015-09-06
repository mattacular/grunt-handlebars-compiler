define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['helloWorld'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<!doctype "
    + alias3(((helper = (helper = helpers.doctype || (depth0 != null ? depth0.doctype : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"doctype","hash":{},"data":data}) : helper)))
    + ">\n<html>\n	<body>\n		<div>Hello world! "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n	</body>\n</html>";
},"useData":true});

templates['helloWorldTwo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<!doctype "
    + alias3(((helper = (helper = helpers.doctype || (depth0 != null ? depth0.doctype : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"doctype","hash":{},"data":data}) : helper)))
    + ">\n<html>\n	<body>\n		<div>Hello world once more! "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n	</body>\n</html>";
},"useData":true});
});