import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tickets from '../data/tickets.json'

const ticket = tickets[0]

const ViewForm = () => {
	const navigate = useNavigate();
			 
	return (
		<div style={{ 
			display: 'block',
			width: 1000, 
			padding: 30, 
			margin: "auto" 
			}}>
			<h1>Ticket Form</h1>
			<div className="d-flex justify-content-center">
			<Button variant="primary" onClick={() => {navigate('../home')}}>Return Home</Button>
			</div>	
			
		<Container fluid>
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
};

export default ViewForm;