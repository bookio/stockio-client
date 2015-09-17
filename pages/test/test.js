var React = require('react');
var Selectable = require('../../components/selectable.js');
 
var App = React.createClass({
  
  render: function () {

	  
        
    return (
      <Selectable component='div' onSelection={this.handleSelection}>
      	<div key='A'>Kalle</div>
      	<div key='B'>Kalle</div>
      	<div key='C'>Kalle</div>
      	<div key='D'>Kalle</div>
        
      </Selectable>
    );
  },
  
  handleSelection: function (keys) {
    console.log('you selected the following keys', keys);
  }
});
 


module.exports = App;