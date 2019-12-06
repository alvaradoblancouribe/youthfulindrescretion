function handleDeleteVsClick(e) {
	
	//var add_url = "https://lccdd1zx4e.execute-api.us-east-2.amazonaws.com/alpha/"
	var form = document.deleteForm;
	var arg1 = form.arg1.value;
	var arg2 = form.arg2.value;

	var data = {};
	data["arg1"] = arg1;
	data["arg2"] = arg2;

	var js = JSON.stringify(data);
	console.log("JS:" + js);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", add_url, true);

	// send the collected data as JSON
	xhr.send(js);

	// This will process results and update HTML as appropriate. 
	xhr.onloadend = function () {
		console.log(xhr);
		console.log(xhr.request);

		if (xhr.readyState == XMLHttpRequest.DONE) {
			console.log ("XHR:" + xhr.responseText);
			processAddResponse(arg1, arg2, xhr.responseText);
		} else {
			processAddResponse(arg1, arg2, "N/A");
		}
	};
}

function handleDeletePlaylistClick(e) {
	
	var delete_url = "https://lccdd1zx4e.execute-api.us-east-2.amazonaws.com/alpha/playlistdelete"
	
	var form = document.deletePlaylistForm;
	var id = form.id.value;
	//var arg2 = form.arg2.value;

	var data = {};
	data["id"] = id;
	//data["arg2"] = arg2;

	var js = JSON.stringify(data);
	console.log("JS:" + js);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", delete_url, true);

	// send the collected data as JSON
	xhr.send(js);

	// This will process results and update HTML as appropriate. 
	xhr.onloadend = function () {
		console.log(xhr);
		console.log(xhr.request);

		if (xhr.readyState == XMLHttpRequest.DONE) {
			console.log ("XHR:" + xhr.responseText);
			processAddResponse(id, xhr.responseText);
		} else {
			processAddResponse(arg1, arg2, "N/A");
		}
	};
}