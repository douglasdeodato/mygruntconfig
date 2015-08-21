$(document).ready(function() {
var context = {
		name: "doug",
		}

html = Handlebars.templates['user.hbs'](context);
$(document.body).html(html);

});