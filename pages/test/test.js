import {Grid, Row, Col} from 'react-bootstrap'; 

var React = require('react');
var Gopher = require('../../tools/gopher.js'); 


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
		console.log(element);

		var request = Gopher.request('GET', 'stocks/' + self.props.symbol);
		
		request.done(function(quotes) {
			
			console.log('got d');

			var data = [];			

			quotes.forEach(function(quote) {
				data.push([new Date(quote.date).valueOf(), quote.close]);
			});


	        element.highcharts('StockChart', {
	
	
	            rangeSelector : {
	                selected : 1,
					inputEnabled: false
	            },
	
	            title : {
	                text : self.props.title
	            },
	
	            series : [{
	                name : self.props.symbol,
	                data : data,
	                tooltip: {
	                    valueDecimals: 2
	                }
	            }]
	        });
			
		});



	},
	
	render() {
		return (
			<div>
			</div>
		);
		
	}
});
  
 
module.exports = React.createClass({

	
	render: function () {
		
	    var options = {
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: 'H&M' //this.props.title
	        },
	        xAxis: {
	            categories: ['alfa', 'beta', 'vera'] //this.props.categories
	        },
	        yAxis: {
	            title: {
	                text: 'Fruit eaten'
	            }
	        },
	        series: [{
	            name: 'Jane',
	            data: [1, 0, 4, 10, 15]
	        }, {
	            name: 'John',
	            data: [5, 7, 3, 13]
	        }]
	    };
				
		
		return (
			<Grid>
				<Row>
					<Col md={6}>
						<HighStock title='AT&T' symbol='T'/>
					</Col>
					<Col md={6}>
						<HighStock title='H&M' symbol='HM-B.ST'/>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<HighStock title='NCC' symbol='NCC-B.ST'/>
					</Col>
					<Col md={6}>
						<HighStock title='Handelsbanken' symbol='SHB-B.ST'/>
					</Col>
				</Row>
			</Grid>
			
		);
	},

});
 
