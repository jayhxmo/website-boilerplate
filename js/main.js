var subscribe_form = function(id) {
	$.post(
		"/subscribe",
		{
			"email": $("#js-subscribe--" + id + " > input").val()
		},
		function (data) {
			// data = $.parseJSON(data);
			if (data["success"] == 1) {
				// Good
				$('#js-status').removeClass('failure');
				$('#js-status').addClass('success');	
			}

			else {
				// Bad
				$('#js-status').removeClass('success');
				$('#js-status').addClass('failure');
			}
		},
		"json"
	);
};