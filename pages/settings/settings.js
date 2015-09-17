

import React from 'react';
import {Label, ListGroup, ListGroupItem, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Thumbnail, Button} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';
import {Page, CheckBox, RadioButton, TextBox, Grid, Row, Col} from '../../components/ui.js';

var Dropzone = require('react-dropzone');



module.exports = React.createClass({

	getInitialState(){

		return {
			companyName: '',
			companyEmail: '',
			emailRequired: true,
			nameRequired: false,
			phoneRequired: false,
			
			twitter: '',
			facebook: '',
			instagram: '',
			option:1
				
		};
	},
	
	onChange(name, value) {

		console.log(name, value);
		
		switch (name) {
			case 'companyName': {
				this.setState({companyName:value});
				break;
			}
			case 'companyEmail': {
				this.setState({companyEmail:value});
				break;
			}
			case 'emailRequired': {
				this.setState({emailRequired:value});
				break;
			}
			case 'phoneRequired': {
				this.setState({phoneRequired:value});
				break;
			}
			case 'nameRequired': {
				this.setState({nameRequired:value});
				break;
			}
			case 'companyWeb': {
				this.setState({companyWeb:value});
				break;
			}
			case 'option': {
				this.setState({option:value});
				break;
			}
			default: {
				var state = {};
				state[name] = value;
				this.setState(state);
			}
		}
	},

	onDrop(files) {
		console.log('onDrop', files);
		this.setState({logo:files[0]});
	},

	renderLogo() {

		console.log(this.state.logo);
		if (this.state.logo) {
			return (
				<div style={{display:'table', width:'100%', height:'100%'}}>
					<div style={{display:'table-cell', verticalAlign:'middle', textAlign:'center', padding:'1em'}}>
						<img src={this.state.logo.preview} style={{maxHeight:'200px'}}/>
					</div>
				</div>
			);
		}
	},

	
	render() {

		return (
			
			<Page>
				<Grid>
					<Row>
						<Col md={12}>
							<Panel header='Obligatoriska uppgifter vid bokning'>
								<CheckBox onChange={this.onChange} name='nameRequired'  value={this.state.nameRequired}  label='Namn'/>
								<CheckBox onChange={this.onChange} name='phoneRequired' value={this.state.phoneRequired} label='Telefon'/>
								<CheckBox onChange={this.onChange} name='emailRequired' value={this.state.emailRequired} label='E-post'/>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Panel header='Uppgifter om ditt företag'>
								<TextBox name='companyName'  label='Företagsnamn' value={this.state.companyName}  onChange={this.onChange}/>
								<TextBox name='companyEmail' label='E-post'       value={this.state.companyEmail} onChange={this.onChange}/>
								<TextBox name='companyWeb'   label='Hemsida'      value={this.state.companyWeb}   onChange={this.onChange}/>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Panel header='Sociala medier'>
								<TextBox name='facebook'  label='Facebook'        value={this.state.facebook}  onChange={this.onChange}/>
								<TextBox name='twitter'   label='Twitter'         value={this.state.twitter}   onChange={this.onChange}/>
								<TextBox name='instagram' label='Instagram'       value={this.state.instagram} onChange={this.onChange}/>
							</Panel>
						</Col>
						<Col md={12}>
							<Panel header='Visa events på'>
								<CheckBox name='postToFacebook'   label='Facebook'    disabled={this.state.facebook == ''}  value={this.state.postToFacebook}   onChange={this.onChange}/>
								<CheckBox name='postToTwitter'    label='Twitter'     disabled={this.state.twitter == ''}   value={this.state.postToTwitter}    onChange={this.onChange}/>
								<CheckBox name='postToInstagram'  label='Instagram'   disabled={this.state.instagram == ''} value={this.state.postToInstagram}  onChange={this.onChange}/>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Panel header='Logotyp' style={{textAlign:'center'}}>
								<div style={{textAlign:'center'}}>
									<Dropzone ref='dropzone' onDrop={this.onDrop} multiple={false} style={{display:'inline-block', textAlign:'center', width:'200px', height:'200px', borderRadius:'10px', border:'5px dashed rgb(220, 220, 220)'}}>
										{this.renderLogo()}
									</Dropzone>
								</div>
								
							</Panel>
						</Col>
					</Row>

					<Panel>
						<h5>
							Detta är egentligen inte några inställningar utan mer en plats för att komma åt olika sidor.
						</h5>
						<p>
							Arbete pågår.
						</p>
						
					</Panel>
					<ListView>
					    <ListViewItem title='Logga in' href='#/login' glyphRight='chevron-right'/>
					    <ListViewItem title='Användare' href='#/users' glyphRight='chevron-right'/>
					    <ListViewItem title='Events' href='#/events' glyphRight='chevron-right'/>
					    <ListViewItem title='Masonry' subtitle='Prova på en variant av Isotope' href='#/masonry' glyphRight='chevron-right'/>
					    <ListViewItem title='Material-UI' subtitle='Se ett exempel på hur Material-UI ser ut' href='#/material' glyphRight='chevron-right'/>
					    <ListViewItem title='Elemental-UI' subtitle='Se ett exempel på hur Elemental-UI ser ut' href='#/elemental' glyphRight='chevron-right'/>
	
	
					</ListView>
	
	
				</Grid>
			</Page>

		);
	}

});


