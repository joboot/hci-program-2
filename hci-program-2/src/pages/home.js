import  React, { Component } from "react";
import { Table } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import tickets from '../data/tickets.json'

export default class Home extends Component {
	
	routeChange = () =>{
		let navigate = useNavigate();
		let path = '../input_form'
		navigate(path);
	}
	render () {
		return (
			<div>
				<h1>
					IT Ticket System
				</h1>

				<div className="d-flex justify-content-center submit">
					<Button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.routeChange}>Submit a Ticket</Button>
				</div>
				{/*The <Button> tag is used to add a button to the home page. When Clicked, it takes you to the Input Form Page.*/}

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
			</div>
		);
	}
};
// This code, starting with the <Table> tag is used to display the information regarding submitted tickets.