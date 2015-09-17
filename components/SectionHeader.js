var React = require('react');
var Bootstrap = require('react-bootstrap');


var SectionHeader = module.exports = React.createClass({
	


	render() {
		var style = {
			background: 'rgb(240, 240, 240)',
			padding: '1em',
			paddingLeft: '2em',
			//borderRadius: '2em',			
			textAlign: 'left',
			fontSize: '120%'
		};
		
		return (
				<Bootstrap.Grid>
					<Bootstrap.Row style={style}>
							{this.props.caption}
					</Bootstrap.Row>
				</Bootstrap.Grid>
		);
	}
});