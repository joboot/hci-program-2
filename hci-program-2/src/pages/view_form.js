import  React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tickets from '../data/tickets.json'

const ticket = tickets[0]

export default class ViewForm extends Component {
	
	routeChange = () => {
			let navigate = useNavigate();
			let path = '../home'
			navigate(path);
		}
	render() { 
		return (
			<div>
				<h1>Ticket Form</h1>
				<div className="d-flex justify-content-center">
				<Button variant="primary" onClick={this.routeChange}>Return Home</Button>
				</div>	
				
			<Container>
				<Col>
					<Row>
						<b><div className="id">Ticket ID Number: </div></b>
						<div>{ticket.id}</div>

						<b><div id="form_item" className="subject">Subject: </div></b>
						<div>{ticket.subject}</div>

						<b><div id="form_item" className="type">Type: </div></b>
						<div>{ticket.type}</div>

						<b><div id="form_item" className='name'>Name: </div></b>
						<div>{ticket.name}</div>

						<b><div id="form_item" className='phone'>Phone: </div></b>
						<div>{ticket.phone}</div>

						<b><div id="form_item" className="date">Date Added: </div></b>
						<div>{ticket.date}</div>

						<b><div id="form_item" className="date">Description: </div></b>
						<div>{ticket.description}</div>

					</Row>

				</Col>
			</Container>	
				
			</div>
		);
	}
};