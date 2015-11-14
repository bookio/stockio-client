import {Grid, Row, Col} from 'react-bootstrap'; 

var React = require('react');
var Gopher = require('../../tools/gopher.js'); 

var util     = require('util');
var sprintf  = require('../../tools/sprintf.js');

var http = require('http');

function httpRequest(method, url, data) {

	var beforeSend = function(xhr) {
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	}

	console.log("Request %s/%s -> '%s'", method, url, data ? JSON.stringify(data) : '');
	
	var request = $.ajax({
		type: method,
		url: url,
		data: data ? JSON.stringify(data) : null,
		dataType: 'json',
		beforeSend: beforeSend
	});


	return request;
}


function fetch(symbol, year, callback) {
	
	var template = 'select * from yahoo.finance.historicaldata where symbol = "%s" and startDate = "%04d-01-01" and endDate = "%04d-12-31"';
	var query    = sprintf(template, symbol, year, year);

	var url = '';
	
	url += 'https://query.yahooapis.com/v1/public/yql?q='
	url += encodeURIComponent(query);
	url += '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';

	var path = ''
	path += '/v1/public/yql?q='
	path += encodeURIComponent(query);
	path += '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';


	var deferred = $.Deferred();
	var request = httpRequest('GET', url);

	request.done(function(data) {
		
		var quotes = [];
		
		if (data.query && data.query.results)
			quotes = data.query.results.quote;
			
		if (!$.isArray(quotes))
			quotes = [quotes];
			 
		deferred.resolve(quotes);
	});

	request.fail(function() {
		deferred.resolve([]);
	});
	

	return deferred;
	/*
	request(url, function (error, response, body) {
		try {
			if (error)
				throw error;
				
			if (response.statusCode == 200) {
				var json = JSON.parse(body);
				var results = json.query.results.quote;
				
				if (!util.isArray(results))
					results = [results];

				var data = [];
				
				results.forEach(function(result) {
					var item = {};
					item.symbol = result.Symbol;
					item.low = parseFloat(result.Low);
					item.high = parseFloat(result.High);
					item.open = parseFloat(result.Open);
					item.close = parseFloat(result.Close);
					item.date = result.Date;


					console.log(item);
				});
				
			}
			else
				throw new Error('Invalid status code');
		}
		catch(error) {
			console.log(error);
				
		}
		
	});
	return request;
	*/
	
}






	




var HighCharts = React.createClass({
	

	componentDidMount() {
		var element = $(React.findDOMNode(this));
		console.log(element);

		var request = Gopher.request('stocks');
		
		request.done(function(data) {
		    element.highcharts(this.props.options);
			
		});

	},
	
	render() {
		return (
			<div>
			</div>
		);
		
	}
});



var HighStock = React.createClass({
	
	componentDidMount() {
		var self = this;
		var element = $(React.findDOMNode(this));

		console.log('fetching quotes');

		//var request = httpRequest('GET', 'http://localhost:5000/quotes/' + this.props.symbol);
		var request = httpRequest('GET', 'http://stockio-node.herokuapp.com/quotes/' + this.props.symbol);
		
		request.done(function(data){

			var quotes = [];
			
			data.forEach(function(item) {
				quotes.push([new Date(item.date).valueOf(), parseFloat(item.quote)]);
			});
			/*
			quotes.sort(function(a, b){
				return a[0] - b[0];
			});
*/

	        element.highcharts('StockChart', {
	
	
	            rangeSelector : {
	                selected : 4,
					inputEnabled: false
	            },
	
	            title : {
	                text : self.props.title
	            },
	
	            series : [{
	                name : self.props.symbol,
	                data : quotes,
	                tooltip: {
	                    valueDecimals: 2
	                }
	            }]
	        });

		});		
	},
	
	render() {
		return (
			<div style={{border:'1px solid rgb(240,240,240)', margin:'1em', height:'450px'}}>
			</div>
		);
		
	}
});
 
var HighStockXX = React.createClass({
	
	componentDidMount() {
		var self = this;
		var element = $(React.findDOMNode(this));

		console.log('fetching quotes');

		var year1 = fetch(this.props.symbol, 2015);
		var year2 = fetch(this.props.symbol, 2014);
		
		var data = [];
		
		year1.done(function(quotes){
			quotes.forEach(function(quote){
				data.push(quote);
			});
		});

		year2.done(function(quotes){
			quotes.forEach(function(quote){
				data.push(quote);
			});
		});
		
		$.when(year1, year2).then(function() {
			var quotes = [];
			
			console.log('got data', data.length);
			
			data.forEach(function(item) {
				quotes.push([new Date(item.Date).valueOf(), parseFloat(item.Close)]);
			});
			
			quotes.sort(function(a, b){
				return a[0] - b[0];
			});

//			console.log(quotes);			
	        element.highcharts('StockChart', {
	
	
	            rangeSelector : {
	                selected : 4,
					inputEnabled: false
	            },
	
	            title : {
	                text : self.props.title
	            },
	
	            series : [{
	                name : self.props.symbol,
	                data : quotes,
	                tooltip: {
	                    valueDecimals: 2
	                }
	            }]
	        });

		});		
	},
	
	render() {
		return (
			<div style={{border:'1px solid rgb(240,240,240)', margin:'1em', height:'450px'}}>
			</div>
		);
		
	}
});
  
 
module.exports = React.createClass({

	
	componentDidMount() {


	},
	render: function () {
		

		var stocks = [
	

			{ 'name':'AT&T', 'symbol':'T' },
			{ 'name':'Ares Capital', 'symbol':'ARCC' },
			{ 'name':'Castellum', 'symbol':'CAST.ST' },
			{ 'name':'H&M', 'symbol':'HM-B.ST' },
			{ 'name':'NCC', 'symbol':'NCC-B.ST' },
			{ 'name':'Industrivärlden', 'symbol':'INDU-C.ST' },
			{ 'name':'Pfizer', 'symbol':'PFE' },
			{ 'name':'SHB', 'symbol':'SHB-B.ST' },

			{ 'name':'Guld',  'symbol':'GOLD' },

			{ 'name':'OMX Index',  'symbol':'^OMX' }	
		];

		var children = stocks.map(function(stock) {
			return (
				<Row key={stock.symbol}>
					<Col md={12}>
						<HighStock key={stock.symbol} title={stock.name} symbol={stock.symbol}/>
					</Col>
				</Row>
			);
		});

		
		return (
			<Grid>
				{children}
			</Grid>
			
		);
	},

});
 
