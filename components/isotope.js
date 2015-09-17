var React = require('react');

var Bootstrap = require('react-bootstrap');
var ui = Bootstrap;

var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Input = Bootstrap.Input;
var Thumbnail = Bootstrap.Thumbnail;

var React = require('react');




module.exports.Isotope = React.createClass({

	getInitialState() {
		return {

		};
	},

	// Just to show it's possible to manipulate DOM with JQuery inside React
	componentDidMount() {
		var self = this;

		$('.grid').isotope({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
	},

	render() {
		var style = {
			position: 'relative',
			padding: '1em'
			
		}
		return (
            <div className="Isotope">
				<div className="grid" style={style}>
					{this.props.children}
				</div>
            </div>
		);
	}
});

module.exports.IsotopeItem = React.createClass({

	propTypes: {
		style: React.PropTypes.object
	},

	getDefaultProps() {
		return {
			style: {
			}
		};
	},
	
	getInitialState() {
		return {
		};
	},

	render() {
	
		var style = {
			border: '2px solid rgb(240, 240, 240)',
			//borderStyle: 'dashed',
			borderRadius: '8px',
			margin: '0.25em',
			minWidth: '10px',	
			minHeight: '10px',
			background: 'transparent',
			padding: '0.5em 0.5em 0.5em 0.5em'	,
			overflow:'hidden'
		};

		return (
			<div className="grid-item" style={style}>
				<div style={this.props.style}>
					{this.props.children}
				</div>
			</div>
		);		
	}
});



