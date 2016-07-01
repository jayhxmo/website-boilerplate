var subscribe_form = function(id) {
	$.post(
		"/subscribe",
		{
			"email": $("#submitForm" + id + " > input").val()
		},
		function (data) {
			data = $.parseJSON(data);
			if (data["success"] == 1) {
				// Good
				$(".footer > .container").append("<p class=\"response good\">" + data["message"] + "</p>")
			} else {
				// Bad
				$(".footer > .container").append("<p class=\"response bad\">" + data["message"] + "</p>")
			}
		},
		"json"
	);
};