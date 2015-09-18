import {sprintf, Base64} from './tools.js';



	var Module = {};
	
	Module.baseURL = 'http://stockio-node.herokuapp.com';
	//Module.baseURL = 'http://localhost:5000';
	
	
	
	var requestSucceeded = function(data) {
		console.log('Request OK');
	}
	
	var requestFailed = function(xhr) {
	
		var message = '#ERROR#';
	
		try {
			var json = JSON.parse(xhr.responseText);
			message = json && json.error ? json.error : xhr.responseText;
		}
	
		catch (error) {
			message = xhr.responseText;
		}
	
		console.log(sprintf('Request failed. %s', message));
					
	}
		
	Module.request = function(method, url, data) {
	
		var beforeSend = function(xhr) {
			xhr.setRequestHeader("Authorization", Module.sessionID);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
		}
	
		console.log("Request %s/%s -> '%s'", method, url, data ? JSON.stringify(data) : '');
		
		var request = $.ajax({
			type: method,
			url: Module.baseURL + '/' + url,
			data: data ? JSON.stringify(data) : null,
			dataType: 'json',
			beforeSend: beforeSend
		});
	
		request.done(requestSucceeded);
		request.fail(requestFailed);
	
		return request;
	}

module.exports = Module;
//export default Gopher = Module;

console.log('Gopher loaded...');

