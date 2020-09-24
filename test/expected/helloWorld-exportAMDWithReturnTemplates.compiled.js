define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['helloWorld'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!doctype "
    + alias4(((helper = (helper = lookupProperty(helpers,"doctype") || (depth0 != null ? lookupProperty(depth0,"doctype") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doctype","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":21}}}) : helper)))
    + ">\n<html>\n	<body>\n		<div>Hello world! "
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":31}}}) : helper)))
    + "</div>\n	</body>\n</html>";
},"useData":true});

templates['helloWorldTwo'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!doctype "
    + alias4(((helper = (helper = lookupProperty(helpers,"doctype") || (depth0 != null ? lookupProperty(depth0,"doctype") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doctype","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":21}}}) : helper)))
    + ">\n<html>\n	<body>\n		<div>Hello world once more! "
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":41}}}) : helper)))
    + "</div>\n	</body>\n</html>";
},"useData":true});
return templates;
});