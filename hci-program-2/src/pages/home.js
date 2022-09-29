import React from "react";
import {Table} from "react-bootstrap"

const Home = () => {
return (
	<div>
	<h1>
		Home page.
	</h1>
		<button type="button" class="btn btn-primary"><a href="input_form.js">Add Ticket</a></button>
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
