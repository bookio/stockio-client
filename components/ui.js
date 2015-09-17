

import React, {PropTypes} from 'react';

import {Glyphicon, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, DropdownButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

import {sprintf} from '../tools/tools.js';
var Spinner = require('react-spinkit');
var Bootstrap = require('react-bootstrap');

module.exports.React = require('react');
module.exports.Spinner = require('react-spinkit');
module.exports.SplitButton = SplitButton;
module.exports.Input = Input;
module.exports.MenuItem = MenuItem;
module.exports.Button = Button;
module.exports.Grid = Grid;
module.exports.Panel = Panel;
module.exports.Button = Button;
module.exports.ButtonGroup = ButtonGroup;
module.exports.Row = Row;
module.exports.Col = Col;
module.exports.Spinner = require('react-spinkit');
module.exports.ButtonGroup = Bootstrap.ButtonGroup;
module.exports.Glyphicon = Bootstrap.Glyphicon;
module.exports.Jumbotron = Bootstrap.Jumbotron;
module.exports.Thumbnail = Bootstrap.Thumbnail;
module.exports.ListView = require('./listview.js').ListView;
module.exports.ListViewItem = require('./listview.js').ListViewItem;



/*
module.exports.Panel = React.createClass({

	render() {
	
		return (
			<Panel style={{background:'transparent'}}>
				{this.props.children}
			</Panel>
		);
		
	}
});
*/

module.exports.Grid = React.createClass({

	render() {
	
		var style = this.props.style == undefined ? {} : this.props.style;

		
		if (style.maxWidth == undefined)
			style.maxWidth = '60em';


		if (style.textAlign == undefined)
			style.textAlign = 'left';

		return (
			<Bootstrap.Grid style={style}  >
				{this.props.children}
			</Bootstrap.Grid>
		);
		
	}

});

module.exports.Page = React.createClass({

	render() {
	
		return (
			<div style={{display:'block', paddingBottom:'1em', textAlign:'center'}}>
				<div style={{padding:'0px', display:'inline-block', textAlign:'center', margin:'auto'}}>
					{this.props.children}
				</div>
			</div>
		);
		
	}
});


var CheckBox = module.exports.CheckBox = React.createClass({


	getDefaultProps() {
	
		return {
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, event.target.checked);
	},
	
	
	render() {
	
		return (
			<Input type='checkbox' disabled={this.props.disabled} checked={this.props.value}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});


var RadioButton = module.exports.RadioButton = React.createClass({


	getDefaultProps() {
	
		return {
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, this.props.option);
	},
	
	isChecked() {
		return this.props.value == this.props.option;
	},
	
	render() {
	
		return (
			<Input type='radio' name={this.props.name} disabled={this.props.disabled} checked={this.isChecked()}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});

var TextBox = module.exports.TextBox = React.createClass({

	getDefaultProps() {
	
		return {
			label: '',
			value: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, event.target.value);
	},
	
	
	render() {
		return (
			<Input type='text' disabled={this.props.disabled} label={this.props.label} value={this.props.value} placeholder={this.props.placeholder} onChange={this.onChange}>
			</Input>
		);
		
	}
});





