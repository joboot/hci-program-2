import  React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import tickets from '../data/tickets.json'

const Home = () => {
	const navigate = useNavigate();
	
	return (
		<div style={{ 
			display: 'block',
			width: 1000, 
			padding: 30, 
			margin: "auto" 
			}}>
			<h1>
				IT Ticket System
			</h1>

			<br />

			<div className="d-flex justify-content-center submit">
				<Button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => {navigate('../input_form')}}>Submit a Ticket</Button>
			</div>
			{/*The <Button> tag is used to add a button to the home page. When Clicked, it takes you to the Input Form Page.*/}

			<br />

			<Container fluid>
				<Row>
					<Col>
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th width="50">ID</th>
									<th width="200">Subject</th>
									<th width="100">Type</th>
									<th width="150">Name</th>
									<th width="100">Phone</th>
									<th width="100">Date</th>
								</tr>
							</thead>

							<tbody>
								{tickets.length ? (tickets.map((row) => (
									<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.subject}</td>
									<td>{row.type}</td>
									<td>{row.name}</td>
									<td>{row.phone}</td>
									<td>{row.date}</td>
									</tr>
									))
									) : (
										<tr>
											<td>No tickets yet</td>
										</tr>
									)
								}
									
							</tbody>
							</Table>
					</Col>
				</Row>
			</Container>
			
		</div>
	);
};
// This code, starting with the <Table> tag is used to display the information regarding submitted tickets.

export default Home;
