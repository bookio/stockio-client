import {sprintf, Base64} from './tools.js';



	var Module = {};
	
	Module.baseURL = 'http://eventio-node.herokuapp.com';
	//Module.baseURL = 'http://localhost:5000';
	
	Module.user = null;
	Module.client = null;
	Module.sessionID = localStorage.sessionID; //''; //$.isString($.cookie('sid')) ? $.cookie('sid') : '';
	console.log('Stored sessionID', Module.sessionID);
	
	var loginComplete = function(data) {
		Module.client = data.client;
		Module.user = data.user;
		Module.sessionID = data.sid;
	
		console.log('Session ID:%s', data.sid);
	}
	
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
	
	Module.signup = function(username, password) {
	
		var beforeSend = function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + Base64.encode(username + ':' + (password ? password : '')));
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
		}
	
		var request = $.ajax({
			type: 'GET',
			url: Module.baseURL + '/signup',
			data: null,
			dataType: 'json',
			beforeSend: beforeSend
		});
	
		request.done(loginComplete);
		request.fail(requestFailed);
	
		return request;
	}
	
	
	Module.logout = function() {
		Module.sessionID = '';
		Module.user = null;
		Module.client = null;
	
		//$.cookie('sid', '');
	}
	
	Module.login = function(username, password) {
	
		var beforeSend = function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + Base64.encode(username + ':' + (password ? password : '')));
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
		}
	
		var request = $.ajax({
			type: 'GET',
			url: Module.baseURL + '/login',
			data: null,
			dataType: 'json',
			beforeSend: beforeSend
		});
	
		request.done(loginComplete);
		request.fail(requestFailed);
	
		return request;
	}
	
	
	Module.verify = function() {
		var request = Module.request('GET', 'verify');
		request.done(loginComplete);
		request.fail(requestFailed);
	
		return request;
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

