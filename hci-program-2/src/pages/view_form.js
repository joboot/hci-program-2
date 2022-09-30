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
	<Container>
			<Row>
				<Col>
				 <div className="subject">Subject: (subject)</div>
				 <div className="type">Type: (Type of Ticket)</div>
				 <div className='name'>Name: (Name)</div>
				 <div className='phone'>Phone: (111-111-1111)</div>
				 <div className="date">Date Added: (Date)</div>
				</Col>
				<Col>
				 <Button variant="primary" onClick={routeChange}>Close Ticket</Button>
				</Col>
			</Row>
		</Container>
	</div>
);
};


export default ViewForm;