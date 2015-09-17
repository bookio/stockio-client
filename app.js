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
				<Navbar  brand='eventio.com' toggleNavKey={0} style={{borderRadius:'0px'}}>
				
					<CollapsibleNav eventKey={0}>
						<Nav navbar right>
							<NavItem eventKey={1} href='#/home'>Nyheter</NavItem>
							<NavItem eventKey={3} href='#/events'>Events</NavItem>
							<NavItem eventKey={7} href='#/settings'>Inställningar</NavItem>
							<NavItem eventKey={5} href='#/login'>Logga in</NavItem>
						</Nav>
					</CollapsibleNav>
				</Navbar>
			
			
				<div style={{}}>
					<RouteHandler/>
				</div>
			</div>
		
		);
	}
});

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/events/events.js')} />  
  	
    <Route name="events"   path="/events"   handler={require('./pages/events/events.js')}/>
    <Route name="event"    path="/event"    handler={require('./pages/event/event.js')}/>
    <Route name="home"     path="/home"     handler={require('./pages/home/home.js')}/>
    <Route name="isotope"  path="/isotope"  handler={require('./pages/isotope/isotope.js')}/>
    <Route name="login"    path="/login"    handler={require('./pages/login/login.js')}/>
    <Route name="material"    path="/material"    handler={require('./pages/material/material.js')}/>
    <Route name="users"    path="/users"    handler={require('./pages/users/users.js')}/>
    <Route name="reservation"    path="/reservation"    handler={require('./pages/reservation/reservation.js')}/>
    <Route name="settings"    path="/settings"    handler={require('./pages/settings/settings.js')}/>
    <Route name="masonry"    path="/masonry"    handler={require('./pages/masonry/masonry.js')}/>
    <Route name="user-new"    path="/user"    handler={require('./pages/user/user.js')}/>
    <Route name="user"    path="/user/:id"    handler={require('./pages/user/user.js')}/>
    <Route name="elemental"    path="/elemental"    handler={require('./pages/elemental/elemental.js')}/>
    <Route name="test"    path="/test"    handler={require('./pages/test/test.js')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
	React.render(<Handler/>, document.body);
});