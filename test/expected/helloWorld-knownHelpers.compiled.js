(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['helloWorld-helpers'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "		<div>Hello world! "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "		<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!doctype "
    + this.escapeExpression(((helper = (helper = helpers.doctype || (depth0 != null ? depth0.doctype : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"doctype","hash":{},"data":data}) : helper)))
    + ">\n<html>\n	<body>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.messages : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</body>\n</html>";
},"useData":true});
}());