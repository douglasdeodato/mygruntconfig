$(document).ready(function() {
var context = {
		name: "doug",
		}

html = this.myapp.templates.user(context);
$(document.body).html(html);

});