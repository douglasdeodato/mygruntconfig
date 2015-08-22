this["myapp"] = this["myapp"] || {};
this["myapp"]["templates"] = this["myapp"]["templates"] || {};

this["myapp"]["templates"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div>\n\n<p class=\"user\">\n\nhi , my name is "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ".\n\n</p>\n\n</div>";
},"useData":true});
$(document).ready(function() {
var context = {
		name: "doug",
		}

html = Handlebars.templates['this.myapp.templates.user'](context);
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
	name:"douglas deodato"
};
var Calc = {};

Calc.add = function (n1,n2){
	return n1 +n2;
};