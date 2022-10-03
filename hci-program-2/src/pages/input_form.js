import  React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
//import { tickets } from '../data/tickets'
import tickets from '../data/tickets.json'

export default class InputForm extends Component {
	state = {
		name: "",
		phone:"",
		type:"",
		subject:"",
		description:""
	};

	routeChange = () =>{
		const navigate = useNavigate();
		
		let path = '../home'
		navigate(path);
	}

	// handleOnChange = e =>{
	// 	const {name, value} = e.target
	// }
	
	onSubmit = () => {
		//put save state here
		console.log(new Date().toLocaleString());
		console.log(this.state);
		let nextID = tickets.length + 1;
		console.log(nextID);
		console.log("Submitted ticket");
		let jsonTicket = JSON.stringify({ "id": nextID, "subject": this.state.subject, "type": this.state.type, "name": this.state.name, "phone": this.state.phone, "date": new Date().toLocaleString(), "description": this.state.description });
		tickets.push(jsonTicket);
		console.log(tickets)
		//this.routeChange();
		
	};

	createFormGroups = () => {
		return(
			<div>
				<Form.Group>
					<Form.Label>
						Name:
					</Form.Label>
					<Form.Control
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={e => this.setState({ name: e.target.value })}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Phone Number:
					</Form.Label>
					<Form.Control
						name="phone"
						placeholder="Phone Number"
						value={this.state.phone}
						onChange={e => this.setState({ phone: e.target.value })}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Type:
					</Form.Label>
					<Form.Select
						value={this.state.type}
						onChange={e => this.setState({ type: e.target.value })}>

						<option value="" isinvalid="true">
							Select Type
						</option>
						<option value="incident">Incident</option>
						<option value="request">Request</option>

					</Form.Select>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Subject:
					</Form.Label>
					<Form.Control
						name="subject"
						placeholder="Subject"
						value={this.state.subject}
						onChange={e => this.setState({ subject: e.target.value })}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Description:
					</Form.Label>
					<Form.Control
						name="description"
						placeholder="Description"
						value={this.state.description}
						onChange={e => this.setState({ description: e.target.value })}
						type="text"
						required
					/>
				</Form.Group>

				<br />

			</div>
			/* This code is used to display the form group on the input form page where the user can type in their information. there is placeholder text that the user can click on to type in their information*/
		)
	}

	render() {
		return (
		<div>
			<h1>
				Submit a Ticket
			</h1>
			
			<Form autoComplete="off" onSubmit={this.onSubmit}>

				{this.createFormGroups()};

				<Button type="button" className="btn btn-primary" onClick={this.onSubmit}>
					Submit
				</Button>
			</Form>

		</div>
		);
	}
	// This is the code that is used to submit the users information by clicking a button provided by bootstrap
};