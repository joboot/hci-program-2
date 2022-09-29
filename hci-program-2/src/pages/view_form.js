import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import tickets from "../../src/data/tickets.json"

// const ticket = tickets[0]
const ViewForm = () => {
return (
	<div>
		<h1>Ticket Form</h1>
	<Container>
			<Row>
				<Col className="text-weight-bolder text-secondary">
				 <div className="subject">Subject: (Ticket problem)</div>
				 <div className="type">Type: (Type of Ticket)</div>
				 <div className='name'>Name: (Name)</div>
				 <div className='phone'>Phone: (111-111-1111)</div>
				 <div className="date">Date Added: (Date)</div>
				 <div className='status'>Status: (Pending)</div>
				 
				</Col>
				<Col>
				 <Button variant="outline-info" href="home.js">Close Ticket</Button>
				</Col>
			</Row>
		</Container>
	</div>
);
};

export default ViewForm;