import React from "react";
import { Table } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Home = () => {
	// The <Button> tag is used to add a button to the home page. When Clicked, it takes you to the Input Form Page.
	let navigate = useNavigate();
	const routeChange = () =>{
		let path = '../input_form'
		navigate(path);
	}
	return (
		<div>
		<h1>
			IT Ticket System
		</h1>
			<Button type='button' color="primary" onClick={routeChange}>Submit a Ticket</Button>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Subject</th>
						<th>Type</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<th>PC wont boot</th>
						<th>Problem</th>
						<th>Jordan Booth</th>
						<th>3056644029</th>
						<th>9/29/2022</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Home;
