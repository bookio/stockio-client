import React from 'react';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Navbar,  CollapsibleNav, NavItem, Nav} from 'react-bootstrap';

var Router = require('react-router'); //import {Router, DefaultRoute, Link, Route, RouteHandler } from 'react-router';


require('./app.less');

let App = React.createClass({  

	componentWillMount() {
		var injectTapEventPlugin = require('react-tap-event-plugin');
		injectTapEventPlugin();		
	},
	render() {
		return (
			<div >
				<div style={{}}>
					<RouteHandler/>
				</div>
			</div>
		
		);
	}
});

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/test/test.js')} />  
  	
    <Route name="test"    path="/test"    handler={require('./pages/test/test.js')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
	React.render(<Handler/>, document.body);
});