this["myapp"] = this["myapp"] || {};
this["myapp"]["templates"] = this["myapp"]["templates"] || {};

this["myapp"]["templates"]["user"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n\r\n<p class=\"user\">\r\n\r\nhi , my name is "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":24}}}) : helper)))
    + ".\r\n\r\n</p>\r\n\r\n</div>";
},"useData":true});
$(document).ready(function() {
var context = {
		name: "doug",
		}

html = this.myapp.templates.user(context);
$(document.body).html(html);

});
var data = require("./test");

//test for sub, used for ember
console.log(data['name']);
console.log(data.name);

console.log(data);
console.log(douglas);

foo =1;

module.exports = {
	name:"douglas deodato 2022323232"
};
var Calc = {};

Calc.add = function (n1,n2){
	return n1 +n2;
};