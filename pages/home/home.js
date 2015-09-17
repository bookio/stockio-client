

import React from 'react';
import {Page, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from '../../components/ui.js';


module.exports = React.createClass({

	getInitialState(){

		return {}
	},
	


	render() {

		return (
			<Page>
				<Grid>
				<Jumbotron>
					<h1>Boka nu!</h1>
					<p>Vi har nu en hel del nya events på gång.</p>
					<p>Kom och smaka på öl, vin och whiskey med era nära och kära.</p>
					<Button href="#/events"  bsStyle='primary'>Visa mer</Button>
				</Jumbotron>	
				</Grid>
			</Page>
			

		);
	}

});

