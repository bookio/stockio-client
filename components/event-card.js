import React from 'react';
import {Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';


module.exports = React.createClass({
	
	render() {
		return (
			<Thumbnail src={this.props.image} >
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				<p>
					<Button block>Boka</Button>
				</p>
			</Thumbnail>
		);
		
	}
});

