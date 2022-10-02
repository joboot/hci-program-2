import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tickets } from "../data/tickets"

const ticket = tickets[0]
const ViewForm = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = '../home'
		navigate(path);
	}
return (
	<div>
		<h1>Ticket Form</h1>
		<div class="d-flex justify-content-center">
		 <Button variant="primary" onClick={routeChange}>Return Home</Button>
		 </div>	
		
	<Container>
		<Col>
			<Row>
				<b><div classname="id">Ticket ID Number: </div></b>
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
			</Row>
		</Col>
	</Container>	
		{/*This code is used to display the information provided in a ticket that has been submitted by a user*/}
	</div>
);
};


export default ViewForm;